import React, { fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Cards from '../Cards/Cards';
import Header from '../shared/UI/Header/Header';

import characters from '../../images/Muggles.png';

import './Characters.css';


const Characters = () => {

   



    return (
        <div className="characters">
          <Header />
          <h1>Characters</h1>
          <img className="characters" src={characters} alt="characters" />
          <Cards />
            <ul>
                
            </ul>
        </div>
        
    )


}


export default Characters;