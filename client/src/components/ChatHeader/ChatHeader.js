import React, { Fragment } from 'react';

import close from '../../Icons/close.png';
import online from '../../Icons/online.png';

import './ChatHeader.css';

const ChatHeader = ({ chatroom }) => { 
  return ( 
    <>
      <div className="chatHeader">
          <div className="left">
              <img pl-20 className="onlineIcon" alt="onlineimage" src={online} />
          </div>
          <h4>You are in the <span>{chatroom}</span> room</h4>
          <div className="right"></div>
          <a href="/"><img className="offlineIcon" src={close} alt="closeimage"/></a>
          
      </div>
      <h3>{chatroom}</h3> 
      </>
      
     
  )

}

export default ChatHeader;