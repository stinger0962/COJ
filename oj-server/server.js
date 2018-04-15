const express = require('express');
const app = express();
// create http server
const server = require('http').createServer(app);
// create and attach io to server
const io = require('socket.io').listen(server);
// server starts listening on 3000
server.listen(3000);
server.on('listening', () => {
  console.log("App listening on port 3000! ");
})

const path = require('path');
// import restful router
const restRouter = require('./routes/rest');

// import socket services
var editoerSOcketService = require('./services/editorSocketService')(io);

// establish connection with mongodb
const mongoose = require('mongoose');
const connectionString = require('./services/connectionString');
mongoose.connect(connectionString.getConnectionString());


//serve static files
app.use(express.static(path.join(__dirname, '../public')));
// serve RESTful http requests
app.use('/api/v1', restRouter);
// for all other URL: redirect to default page, giving control to Angular
app.use((req, res) => {
  res.sendFile('index.html',
              {root: path.join(__dirname, '../public')});
})

// app.listen will create a http server
// app.listen(3000, () => console.log('Example app on 3000!'));
