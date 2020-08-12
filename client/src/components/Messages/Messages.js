import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'

import IndividualMessage from '../IndividualMessage/IndividualMessage';

import './Messages.css';


const Messages = ( { messages, name, username, chatroom } ) => (
    <ScrollToBottom className="messages">
        {messages.map((message, index) => <div key={index}><IndividualMessage message={message} name={name} username={username} chatroom={chatroom} /></div>)}
    </ScrollToBottom>
    

)

export default Messages;