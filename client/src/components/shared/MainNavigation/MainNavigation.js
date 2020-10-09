import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import NavigationLinks from '../NavigationLinks/NavigationLinks';


import './MainNavigation.css';

const MainNavigation = props => {

 
  return ( 
      <>
        <nav>
            <NavigationLinks />
          </nav>
          <button className="main-navigation_menu-btn">
            <span />
            <span />
            <span />
          </button>
          <h1 className="main-navigation_title">
      </h1>
      
  
  </>
  );
};

export default MainNavigation;