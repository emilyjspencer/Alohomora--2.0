import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Cards from "../Cards/Cards";
import Header from "../shared/UI/Header/Header";
import Footer from "../shared/UI/Footer/Footer";

import muggles from "../../images/muggles.png";

import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/characters").then((result) => {
      console.log(result);
      const characters = result.data;
      console.log(characters);
      console.log(characters[0]);
      setCharacters(characters);
    });
  }, []);

  console.log(characters);

  return (
    <>
      <div className="characters">
        <Header />
        <h1>Characters</h1>
        <img className="muggles" src={muggles} alt="characters" />
        <br />
        <ul>
          {characters.map((character) => (
            <>
              <li key={character.id}>
                <strong>
                  <p>Name of character:</p> {character.name}{" "}
                </strong>
                <strong>
                  <p>Character's role:</p>
                  {character.role}
                </strong>
                <strong>
                  <p>Character's house:</p>
                  {character.house}
                </strong>
              </li>
            </>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Characters;
