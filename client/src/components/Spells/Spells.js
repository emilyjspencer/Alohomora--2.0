import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Spells = () => {

    const [spells, setSpells] = useState([]);

    useEffect(() => {
        const key = process.env.REACT_APP_API_KEY;
        console.log(key)
        
        

        axios.get(`https://www.potterapi.com/v1/spells?key=${key}`)
          .then(result => {
             console.log(result)
              const spellsdata = result.data;
              console.log(spellsdata);
          })


    })

    return (
        <h1>Spells</h1>
    )


}


export default Spells;