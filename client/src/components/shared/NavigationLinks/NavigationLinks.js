import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLinks.css';

const NavigationLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Chat</NavLink>
    </li>
    <li>
      <NavLink to="/quiz">Quiz</NavLink>
    </li>
    <li>
      <NavLink to="/spells">Spells</NavLink>
    </li>
    <li>
      <NavLink to="/characters">Characters</NavLink>
    </li>
  </ul>

};


export default NavigationLinks;