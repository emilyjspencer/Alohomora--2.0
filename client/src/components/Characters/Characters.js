import React, { fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Cards from '../Cards/Cards';
import Header from '../UI/Header/Header';


const Characters = () => {

    //const [characters, setCharacters] = useState([]);

    useEffect(() => {
        
        const key='$2a$10$0TXo.XhZgsclRMsBTLHsx.5fYykcXOwOWF.12o20jBumw.10YEat2'
        //const key = process.env.REACT_APP_API_KEY;
        console.log(key)
        
        
        axios.get(`https://www.potterapi.com/v1/characters?key=${key}`)
          .then(result => {
             console.log(result)
              //const charactersData = result.data;
             
          });
        }, []);



    return (
        <div className="characters">
          <Header />
          <h1>Characters</h1>
          <Cards />
            <ul>
                {characters.map(character => (
                    <>
                    <Cards />
                    <li key={character.id}>
                        
                        
                    </li>
                    </>
                ))}
            </ul>
        </div>
        
    )


}


export default Characters;