import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cards from '../Cards/Cards';


const Spells = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        
        const key = process.env.REACT_APP_API_KEY;
        console.log(key)
        
        
        

        axios.get(`https://www.potterapi.com/v1/spells?key=${key}`)
          .then(result => {
             console.log(result)
              const spellsData = result.data;
              console.log(spellsData);

              console.log(spellsData[0]);
                setSpells(spellsData)
          });
        }, []);



    return (
        <div className="spells">
          <h1>Spells</h1>
          <Cards />
            <ul>
                {spells.map(spell => (
                    <li key={spell.id}>
                        <strong>{spell.spell}</strong>
                        <br />
                        <strong>{spell.type}</strong>
                        <strong>{spell.effect}</strong>
                    </li>
                ))}
            </ul>
        </div>
        
    )


}


export default Spells;