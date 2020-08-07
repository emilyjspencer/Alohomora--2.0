import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';

import classes from './SortingHat.module.css';

const SortingHat = () => {
    return (
        <>
          <Header />
          <h1 className={classes.Header}>Let the Sorting Hat determine which house you're in</h1>
        </>
    )
}

export default SortingHat;