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

    socket.on('enterUser', ( { username, name, chatroom}, callback)  => {
        console.log(username, name, chatroom);

        const {  user } = addUser( { id: socket.id, name, username, chatroom });

        //if(error) return callback(error);

        socket.emit('message', { user: 'wizard', text: `Welcome to the ${user.chatroom} room, ${user.name}`});

        socket.broadcast.to(user.chatroom).emit('message', { user: 'wizard', text: `${user.name} has joined the ${user.chatroom}`});

        socket.join(user.chatroom);

        callback();
        
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.chatroom).emit('message', { user: user.name, text: message });

        callback();
    })

    socket.on('disconnect', () => {
        console.log('User has left the chat')
    })
});

server.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
});