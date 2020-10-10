import React from 'react';

import './IndividualMessage.css';

const IndividualMessage = ( { message: { user, text }, name } ) => {
    let belongsToCurrentUser = false;

    const alteredName = name.trim().toLowerCase();

    if(user === alteredName) {
        belongsToCurrentUser = true;
    }

    return (
        belongsToCurrentUser 
        ? (
            <div className="messageContainer" justifyEnd>
                <p className="textSentByUser pr-10">{alteredName}</p>
                <div className="messageBox backgroundGreen">
                    <p className="messageText" colorWhite>{text}</p>
                </div>

            </div>
        )
        : (
            <div className="messageContainer" justifystart>
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                </div>
                <p className="textSentByUser pl-10">{user}</p>
            </div>

        )
      )
}

export default IndividualMessage;