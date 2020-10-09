import React, { Fragment } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import IndividualMessage from '../IndividualMessage/IndividualMessage';

import './Messages.css';


const Messages = ( { messages, name } ) => {
    return (
    <>
     <h1>Chat</h1>
    <ScrollToBottom className="messages">
        {messages.map((message, index) => <div key={index}><IndividualMessage message={message} name={name}   /></div>)}
    </ScrollToBottom>
    </>
    )
    
}

export default Messages;