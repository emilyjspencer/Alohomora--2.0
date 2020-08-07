import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';

import classes from './Quiz.module.css';

const Quiz = () => {

    return (
        <>
          <Header />
          <h1 className={classes.Header}>Test your Harry Potter knowledge</h1>
          </>

    )
}

export default Quiz;