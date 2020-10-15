import React from 'react';

import alohomorafooter from './alohomorafooter.png';
import './Footer.css';


const Footer = () => {

    return (
        <>
          <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />    Alohomora2.0 2020
          <br />
          <img className="alohomora" src={alohomorafooter} alt="footer" />
          <img className="alohomora" src={alohomorafooter} alt="footer" />
          <img className="alohomora" src={alohomorafooter} alt="footer" />
          <img className="alohomora" src={alohomorafooter} alt="footer" />
          <img className="alohomora" src={alohomorafooter} alt="footer" />
        </>
    )
}


export default Footer;