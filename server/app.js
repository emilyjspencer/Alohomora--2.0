const express = require('express');

const router = require('./router.js');
const socketio = require('socket.io');
const http = require('http');
const { addUser, deleteUser, findUser, findAllUsers } = require('./users.js');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);



const io = socketio(server);


app.use(router);


io.on('connect', (socket) => {
    console.log('Connecting....')

    socket.on('enterUser', ( { name, chatroom}, callback)  => {
        console.log( name, chatroom);

        const { error, user } = addUser({ id: socket.id, name, chatroom });
        if(error) return callback(error);
        socket.join(user.chatroom);
        socket.emit('message', { user: 'adminwizard', text: `Welcome to the ${user.chatroom} room, ${user.name}`});

        socket.broadcast.to(user.chatroom).emit('message', { user: 'adminwizard', text: `${user.name} has joined the chat`});

      

        callback();
        
    });

    socket.on('sendMessage', (message, callback) => {
        const user = findUser(socket.id);

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