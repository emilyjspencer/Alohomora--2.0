import React, { Fragment, useState, useEffect } from 'react';
import Header from '../UI/Header/Header';
import queryString from 'query-string';
import io from 'socket.io-client';

import classes from './Chatroom.module.css';
import './Chatroom.css';

let socket;

const Chatroom = ( { location } ) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [chatroom, setChatroom] = useState('');
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

    socket.emit('enterUser', { name, username, chatroom } ) 

  })
    return (
        <>
          <Header />
          <h1 className={classes.Header}>Chatroom</h1>
        </>
    )
}

export default Chatroom;