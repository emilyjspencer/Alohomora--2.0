import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../UI/Header/Header';


import classes from './User.module.css';

const User = () => {


    const [name, setName] = useState('');
    const [chatroom, setChatroom] = useState('');

    let message = "Please enter a name and room"

    return (
        <>
          <Header />
          <h1 className={classes.PotterHead}>*</h1>
          <h3>Please sign in to join the chat</h3>
    
          <input type="text" placeholder="Please enter your name" className="inputBox" onChange={ (event) => setName(event.target.value) }></input>
          <input type="text" placeholder="Please enter a room" className="inputBox" onChange={ (event) => setChatroom(event.target.value) }></input>
          <Link onClick={event => (!name || !chatroom) ? event.preventDefault() : null} to={`/chatroom?name=${name}&chatroom=${chatroom}`}>
            <button className="button mt-20" type="submit">Proceed to chatroom</button>
          </Link>
        
        </>
    )

}

export default User;
