import React from 'react'


import face from '../../images/face.png';


import './InputBox.css';

const InputBox  = ( { message, setMessage, sendMessage }) => {
  return (
    <form className="form" >
        <input 
        className="input"
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button 
          className="send"
          onClick={ (event) => sendMessage(event)}>Send Message
        </button>

    </form>
  )
}

export default InputBox;