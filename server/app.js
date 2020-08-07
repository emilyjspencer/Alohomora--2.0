const express = require('express');

const router = require('./router.js');

const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const socketio = require('socket.io');

const io = socketio(server);


app.use(router);


io.on('connection', (socket) => {
    console.log('Connecting....')
});

server.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
});