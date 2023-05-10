import React, { fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Cards from '../Cards/Cards';
import Header from '../shared//UI/Header/Header';

import snape from '../../images/snapespells.png';
import wand from '../../images/purchasewand.jpg';
import patronus from '../../images/patronus2.jpg';

import './spells.css';


const Spells = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        
        axios.get('https://hp-api.onrender.com/api/spells')
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
          <Header />
          <img className="wand" src={wand} alt="wand" />
          <img className="snape" src={snape} alt="snape" />
          <img className="patronus" src={patronus} alt="patronus" />
          <h3>Scroll to list a list of spells</h3>
          
            <ul>
                {spells.map(spell => (
                    <>
                    <Cards />
                    <li key={spell.id}>
                        
                        <strong><p>Name of spell:  {spell.spell} Type of spell: {spell.type} </p> </strong>
                        <br />
                        <strong><p>What does the spell do?  {spell.effect} </p></strong>
                    </li>
                    </>
                ))}
            </ul>
        </div>
        
    )


}


export default Spells;