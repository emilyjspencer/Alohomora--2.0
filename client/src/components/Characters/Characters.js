import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Cards from '../Cards/Cards';
import Header from '../shared/UI/Header/Header';

import muggles from '../../images/muggles.png';

import './Characters.css';


const Characters = () => {

   const [characters, setCharacters] = useState([]);
    
        useEffect(() => {
            
            const key='$2a$10$0TXo.XhZgsclRMsBTLHsx.5fYykcXOwOWF.12o20jBumw.10YEat2'
            //const key = `process.env.REACT_APP_API_KEY`;
            console.log(key)
            
            axios.get(`https://www.potterapi.com/v1/characters?key=${key}`)
              .then(result => {
                 console.log(result)
                  const characters = result.data;
                 console.log(characters)
                  console.log(characters[0]);
                    setCharacters(characters)
              });
            }, []);

      console.log(characters)

    return (
        <div className="characters">
          <Header />
          <h1>Characters</h1>
          <img className="muggles" src={muggles} alt="characters" />
          <br />
          <ul>
                {characters.map(character => (
                    <>
                    <li key={character.id}>
                        <strong><p>Name of character:</p>  {character.name} </strong> 
                        <strong><p>Character's role:</p>{character.role}</strong>
                        <strong><p>Character's house:</p>{character.house}</strong>
                    </li>
                    </>
                ))}
            </ul>
               
        
        </div>
        
    )


}


export default Characters;