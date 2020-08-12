import React from 'react';

import on from '../../Icons/online.png';
import off from '../../Icons/close.png';
import face from '../../images/face.png';
import snitch from '../../images/snitch.png';

import './ChatHeader.css';

const ChatHeader = ( { chatroom } ) => (
  <div className="infoBar">
      <div className="left">
        <img className="online" alt="online image" src={on} />
        <h4>You are in the {chatroom} room</h4>
        <img id="face2" alt="snitch" src={face} />
      </div>
      <div className="right">
        <a href="/" ><img src={off} alt="close" /></a>
      </div>
      <div className="potter">
          <img id="face" alt="hp" src={face} />
      </div>
  </div>

)

export default ChatHeader;