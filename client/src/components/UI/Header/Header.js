import React, { Fragment } from 'react';


import classes from './Header.module.css';
import Banner from './banner.png'


const Header = () => {

    return (
        <>
   
        <img classNAme={classes.Banner}src={Banner} />
        <h1 className={classes.Header}>Alohomora - unlock the conversation</h1>
        {''}
        {''}
        {''}
        {''}
        </>
    )
}

export default Header;