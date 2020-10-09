import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../UI/Header/Header';


import classes from './User.module.css';

const User = () => {


    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [chatroom, setChatroom] = useState('');

    let message = "Please enter a name, username and room"

    return (
        <>
          <Header />
          <h1 className={classes.PotterHead}>*</h1>
          <h3>Please sign in to join the chat</h3>
          <input type="text" placeholder="Please enter a username" className="inputBox" onChange={ (event) => setUsername(event.target.value) }></input>        
          <input type="text" placeholder="Please enter your name" className="inputBox" onChange={ (event) => setName(event.target.value) }></input>
          <input type="text" placeholder="Please enter a room" className="inputBox" onChange={ (event) => setChatroom(event.target.value) }></input>
          <Link to={`/chatroom?name=${name}&username=${username}&chatroom=${chatroom}`} onClick={event => (!username || !name || !chatroom) ? alert('Please enter a name username and room') && event.preventDefault() : alert('Welcome to the chatroom') } >
           
            <button className="button" >Proceed to Chatrooms</button>
          </Link>
        
        </>
    )

}

export default User;
