const express = require('express');

const router = require('./router.js');

const http = require('http');
const app = express();

const { addUser, deleteUser, findUser, findAllUsers } = require('./users.js');
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const socketio = require('socket.io');

const io = socketio(server);


app.use(router);


io.on('connection', (socket) => {
    console.log('Connecting....')
// this callback function is linked to the callback function define in the Chat component
// which has got the error inside of it
    socket.on('enterUser', ( { username, name, chatroom}, callback)  => {
        console.log(username, name, chatroom);

        
        
    })

    socket.on('disconnect', () => {
        console.log('User has left the chat')
    })
});

server.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
});