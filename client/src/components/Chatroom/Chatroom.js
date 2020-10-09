import React, { Fragment, useState, useEffect } from 'react';
import Header from '../UI/Header/Header';
import ChatHeader from '../ChatHeader/ChatHeader';
import InputBox from '../InputBox/InputBox.js';
import queryString from 'query-string';
import io from 'socket.io-client';
import Messages from '../Messages/Messages';



import classes from './Chatroom.module.css';
import './Chatroom.css';

let socket;

const Chatroom = ( { location } ) => {

  const [name, setName] = useState('');
  const [chatroom, setChatroom] = useState('');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const {  name, chatroom } = queryString.parse(location.search)

    socket = io(ENDPOINT);
    console.log(name, chatroom);
    console.log(location.search);
    console.log(socket);

    setName(name);
    setChatroom(chatroom);

    // named event - name of event is enterUser - must match the name on the backend
    socket.emit('enterUser', { name, chatroom }, () => {
      

    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [ENDPOINT, location.search]); 

  const sendMessage = (event) => {

    event.preventDefault();

    if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));

    }
  }
  console.log(message, messages);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages])


  

    return (
        <>
          <Header />
          <h1 className={classes.Header}>Chatroom</h1>
          
          <div className="outer">
            <div className="container">
              
              <ChatHeader  chatroom={chatroom} />
              <Messages messages={messages} name={name} />
              <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
              
               
            </div>

          </div>
        </>
    )
}

export default Chatroom;