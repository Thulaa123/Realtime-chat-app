const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server); 

app.use(express.static(path.join(__dirname+"/public")));

io.on('connection', function)

server.listen(3000);

