import React, { useState, useEffect } from "react";
import Cards2 from "../Cards/Cards2";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Header from "../shared//UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";

import snape from "../../images/snapespells.png";
import wand from "../../images/purchasewand.jpg";
import patronus from "../../images/patronus2.jpg";
import "./spells.css";

const Spells2 = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/spells").then((result) => {
      console.log(result);
      const spellsData = result.data;
      console.log(spellsData);

      console.log(spellsData[0]);
      setSpells(spellsData);
    });
  }, []);

  return (
    <>
      <div className="spells">
        <Header />
        <img className="wand" src={wand} alt="wand" />
        <img className="snape" src={snape} alt="snape" />
        <img className="patronus" src={patronus} alt="patronus" />
        <h3>Scroll to list a list of spells</h3>
        <Grid container spacing={10} style={{ padding: "1px" }}>
          {spells.map((spell) => (
            <Grid key={spell.id} item xs={12} sm={16} md={4} lg={4} xl={3}>
              <Cards2
                key={spell.id}
                spell={spell.spell}
                type={spell.type}
                effect={spell.effect}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Spells2;
