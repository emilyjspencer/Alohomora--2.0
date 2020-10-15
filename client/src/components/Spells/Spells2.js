import React, {useState, useEffect} from 'react';
import Cards2 from '../Cards/Cards2';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import './spells.css';

const Spells2 = () => {

const [spells, setSpells] = useState([])


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
         
         <div className="Spells">
         <h3>Spells</h3>
         <Grid container spacing={10}
         style={{padding: '24px'}}
         >
          {spells.map(spell => 
            <Grid key={spell.id} item
              xs={12} sm={16} md={4} lg={4} xl={3}>
           <Cards2
            key={spell.id} spell={spell.spell} type={spell.type} effect={spell.type}
             />
            </Grid> )}
              </Grid>
               </div>); 
      }
               
export default Spells2;

         
              
       