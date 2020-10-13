import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/UI/Header/Header';

import badges from '../../images/hogwartsillustration.jpg';
import classes from './User.module.css';

const User = () => {


    const [name, setName] = useState('');
    const [chatroom, setChatroom] = useState('');
    const [username, setUsername] = useState('');


    return (
        <>
          <Header />
          <img src={badges} alt="hogwartshouses" />
          <h1>About Alohomora 2.0</h1>
          <h4>Alohomora 2.0 is an application for Harry Potter fans</h4>
          <br />
          <p>Alohomora 2.0 provides an online chatroom where you can chat about Harry Potter with other fans</p>
          <p>If you would like to test your knowledge of the books and films, please try our the quiz</p>
          <p>To view a list of spells: click on 'Spells' at the top of the page</p>
          <p>To see a full list of characters from the books, along with their respective houses etc, please click on</p>
          <p>'Characters' at the top of the page</p>
          <br />
          <h3>Please sign in to join the chat</h3>
    
          <input type="text" placeholder="Please enter your name" className="inputBox" onChange={ (event) => setName(event.target.value) }></input>
          <input type="text" placeholder="Please enter a room" className="inputBox" onChange={ (event) => setChatroom(event.target.value) }></input>
          <input type="text" placeholder="Please enter a username" className="inputBox" onChange={ (event) => setUsername(event.target.value) }></input>
          <Link onClick={event => (!name || !chatroom || !username) ? event.preventDefault() : null} to={`/chatroom?name=${name}&chatroom=${chatroom}&username=${username}`}>
            <button className="button mt-20" type="submit">Proceed to chatroom</button>
          </Link>
        
        </>
    )

}

export default User;
