import React from 'react';

import close from '../../Icons/close.png';
import online from '../../Icons/online.png';

import './InfoBar.css';

const InfoBar = ( { chatroom }) => {
  return (
      <div className="infoBar">
          <div className="left">
              <img className="online" alt="onlineimage" src={online} />
              <h3>{chatroom}</h3> 
          </div>
          <div className="right"></div>
          <a href="/"><img className="closeIt" src={close} alt="closeimage"/></a>
      </div>
      
     
  )

}

export default InfoBar;