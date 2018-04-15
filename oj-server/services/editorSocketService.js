
// export an annoymous func to support collaborative editing
module.exports = function(io) {
  // record active users on each problem, problem IS session
  // session['sessionId'] = {'users': [user1, user2, user3...]}
  var sessions = {};
  // dic of (socketid: sessionid), A.K.A. (userid: problemid)
  var socketSessionPair = {};
  // dic of (socketid: nickname)
  var socketNikNamePair={};
  io.on('connection', socket => {

    let sessionId = socket.handshake.query['sessionId'];
    socketSessionPair[socket.id] = sessionId;
    // No user is on this problem, create a new session with empty users
    if (!(sessionId in sessions)) {
      sessions[sessionId] = {
        'users': []
      };
    }

    // TODO: use socket.nickname instead of socket.id

    sessions[sessionId]['users'].push(socket.id);

    // TODO: use io.of('/').in('roomid').clients to loop through sockets

    // register socket event handlers
    // onChange: emit change to all sockets in the same room
    socket.on("change", delta => {
      let sessionId = socketSessionPair[socket.id];
      console.log("change: " + sessionId + " " + delta);
      // the problem should be in an active session
      if (sessionId in sessions) {
        let users = sessions[sessionId]['users'];
        for (let i = 0; i < users.length; i++) {
          if (socket.id != users[i]) {
            io.to(users[i]).emit("change", delta);
          }
        }
      }
      else {
        console.log("cannot tie user to any problem");
      }
    })

    // TODO: register onSendName, get user nikename, client needs emit

  })



}
