import React, { Fragment, useState, useEffect } from 'react';
import Header from '../shared/UI/Header/Header';
import ChatHeader from '../ChatHeader/ChatHeader';
import InputBox from '../InputBox/InputBox.js';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import AllUsers from '../AllUsers/AllUsers';



import classes from './Chatroom.module.css';
import './Chatroom.css';

let socket;

const Chatroom = ( { location } ) => {

  const [name, setName] = useState('');
  const [chatroom, setChatroom] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const {  name, chatroom, username } = queryString.parse(location.search)

    socket = io(ENDPOINT);
    console.log(name, chatroom, username);
    console.log(location.search);
    console.log(socket);

    setName(name);
    setChatroom(chatroom);

    socket.emit('enterUser', { name, chatroom, username}, () => {
      

    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [ENDPOINT, location.search]); 

  const sendMessage = (event) => {

    event.preventDefault();

    if(message) {
        socket.emit('userMessage', message, () => setMessage(''));

    }
  }
  console.log(message, messages);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('usersInRoom', ({ users }) => {
      setUsers(users)
    })
  }, []);

    return (
        <>
          <Header />
          <h1 className={classes.Header}>Chatroom</h1>
          
          <div className="outer">
            <div className="container">
              <ChatHeader  chatroom={chatroom} />
              <Messages messages={messages} name={name} username={username} />
              <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />  
            </div>
             <AllUsers users={users} />
          </div>
        </>
    )
}

export default Chatroom;