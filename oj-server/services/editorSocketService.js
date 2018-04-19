var redisClient = require('../modules/redisClient');
const TIMEOUT = 3600; // set expiration time for Redis to an hour


// export an annoymous func to support collaborative editing
module.exports = function(io) {
  // record active editing for each problem, problemId == sessionId
  // session['sessionId'] = {
  //                     'contents': [delta1, delta2, delta3, ...,],
  //                     'users': [user1, user2, user3, ...] }
  var sessions = {};
  // dic of (socketid: sessionid), A.K.A. (userid: problemid)
  var socketSessionPair = {};
  // dic of (socketid: nickname)
  var socketNikNamePair={};

  // path in redis
  var redisPath = '/temp_edits';

  io.on('connection', socket => {

    let sessionId = socket.handshake.query['sessionId'];
    socketSessionPair[socket.id] = sessionId;

    // if current problem is in active editing
    if (sessionId in sessions) {
      // add new user and broadcast user change
      // TODO: use socket.nickname instead of socket.id
      sessions[sessionId]['users'].push(socket.id);
      let users = sessions[sessionId]['users'];
      for (let i = 0; i < users.length; i++) {
        io.to(users[i]).emit("userChange", users);
      }
    }
    // current problem is not in active editing
    else {
      // try to read problem's editing contents from redis
      redisClient.get(redisPath + "/" + sessionId, data => {
        if (data) {
          console.log("Read editing contents from Redis");
          sessions[sessionId] = {
            'contents': JSON.parse(data),
            'users': []
          };
        }
        else {
          console.log("Create new editing content");
          sessions[sessionId] = {
            'contents': [],
            'users': []
          };
        }
        // add new user and broadcast(to self) user change
        sessions[sessionId]['users'].push(socket.id);
        io.to(socket.id).emit("userChange", socket.id);

      })
    }





    // TODO: use io.of('/').in('roomid').clients to loop through sockets

    // register socket event handlers
    // onChange: emit change to all sockets in the same room
    socket.on("change", delta => {
      let sessionId = socketSessionPair[socket.id];
      console.log("change: " + sessionId + " " + delta);
      // the problem should always be in an active session
      if (sessionId in sessions) {
        // push change into sessions's contents
        // note: contents are only stored to Redis when problem is not active any more
        sessions[sessionId]['contents'].push(delta);
        let users = sessions[sessionId]['users'];
        for (let i = 0; i < users.length; i++) {
          if (socket.id != users[i]) {
            io.to(users[i]).emit("change", delta);
          }
        }
      }
      else {
        console.log("warning: onChange() cannot tie user to any problem ");
      }
    })

    // onRestore, read and update editor contents from sessions
    socket.on("restoreBuffer", () => {
      let sessionId = socketSessionPair[socket.id];
      console.log("restore buffer for problem " + sessionId + " for user: " + socket.id);
      if (sessionId in sessions) {
        // read contents from sessions
        let contents = sessions[sessionId]['contents'];
        // client socket emits change events to trigger editor view update
        for (let i = 0; i < contents.length; i++) {
          socket.emit("change", contents[i]);
        }
      }
      else {
        console.log("warning: onRestoreBuffer() cannot find problem in the sessions");
      }

    })


    //onDisconnect, clean res and store contents to Redis if necessary
    socket.on("disconnect", () => {
      let sessionId = socketSessionPair[socket.id];
      console.log("user " + socket.id + " has left problem " + sessionId);

      let userFoundAndRemoved = false;
      if (sessionId in sessions) {
        let users = sessions[sessionId]['users'];
        let index = users.indexOf(socket.id);
        // for safety
        if (index >= 0) {
          users.splice(index, 1); // remove user from users
          userFoundAndRemoved = true;
          // store editing contents to Redis if no active user is on this problem any more
          if (users.length == 0) {
            console.log("problem becomes inactive, store contents to Redis");

            let key = redisPath + "/" + sessionId;
            let value = JSON.stringify(sessions[sessionId]['contents']);

            redisClient.set(key, value, redisClient.redisPrint);
            redisClient.expire(key, TIMEOUT);
            // now can delete session without lose editing contents
            delete sessions[sessionId];
          }

          // broadcast user left envent
          for (let i = 0; i < users.length; i++) {
            io.to(users[i]).emit("userChange", users);
          }

        }
      }

      if (!userFoundAndRemoved) {
        console.log("warning: onDisconnect() user not found in sessions");
      }

    })


    // TODO: register onSendName, get user nikename, client needs emit

  })



}
