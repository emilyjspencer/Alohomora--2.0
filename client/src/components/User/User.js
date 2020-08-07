import React, { Fragment, useState} from 'react';
import Header from '../UI/Header/Header';

import classes from './User.module.css';

const User = () => {


    const [username, setUsername] = useState('');
    const [chatroom, setChatroom] = useState('');

    return (
        <>
          <Header />
          <h1 className={classes.PotterHead}>Potterhead</h1>
        </>
    )

}

export default User;
