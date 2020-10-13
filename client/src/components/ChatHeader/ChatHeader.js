import React, { Fragment } from 'react';

import close from '../../Icons/close.png';
import online from '../../Icons/online.png';
import hat from '../../images/hat.png';

import './ChatHeader.css';

const ChatHeader = ({ chatroom }) => { 
  return ( 
    <>
      <div className="chatHeader">
          <div className="left">
              <img pl-20 className="onlineIcon" alt="onlineimage" src={online} />
          </div>
          <p className="room">You are in the <span>{chatroom}</span> room</p>
          <div className="right"></div>
          <a href="/"><img className="offlineIcon" src={close} alt="closeimage"/></a>
          <img className="hat" src={hat} />
          <img className="hat2" src={hat} />
      </div>
     
      </>
      
     
  )

}

export default ChatHeader;