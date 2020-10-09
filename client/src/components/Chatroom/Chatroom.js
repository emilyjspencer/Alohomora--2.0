import React, { Fragment, useState, useEffect } from 'react';
import Header from '../UI/Header/Header';
import ChatHeader from '../ChatHeader/ChatHeader';
import InputBox from '../InputBox/InputBox.js';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';

import classes from './Chatroom.module.css';
import './Chatroom.css';

let socket;

const Chatroom = ( { location } ) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [chatroom, setChatroom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const { username, name, chatroom } = queryString.parse(location.search)

    socket = io(ENDPOINT);
    console.log(name, username, chatroom);
    console.log(location.search);
    console.log(socket);

    setName(name);
    setUsername(username);
    setChatroom(chatroom);

    socket.emit('enterUser', { name, username, chatroom }, () => {
      

    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [ENDPOINT, location.search]); 

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages])


  const sendMessage = (event) => {

    event.preventDefault();

    if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));

    }
  }
  console.log(message, messages);

    return (
        <>
          <Header />
          <h1 className={classes.Header}>Chatroom</h1>
          <InfoBar chatroom={chatroom} />
          <div className="outer">
            <div className="container">
              <ChatHeader chatroom={chatroom} />
              <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
              
                <Messages messages={messages} name={name} />
            </div>

          </div>
        </>
    )
}

export default Chatroom;