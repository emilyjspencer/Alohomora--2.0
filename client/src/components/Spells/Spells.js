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
        
        const key='$2a$10$0TXo.XhZgsclRMsBTLHsx.5fYykcXOwOWF.12o20jBumw.10YEat2'
        //const key = process.env.REACT_APP_API_KEY;
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