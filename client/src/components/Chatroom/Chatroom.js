import React, { Fragment } from 'react';
import Header from '../UI/Header/Header';

import classes from './Chatroom.module.css';
import './Chatroom.css';


const Chatroom = () => {

    return (
        <>
          <Header />
          <h1 className={classes.Header}>Chatroom</h1>
        </>
    )
}

export default Chatroom;