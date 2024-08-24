import React from 'react'
import "./MyStyles.css";

function MessageOthers() {
    var props1={name:"RandomUser", message: "This is a sample message"}
  return (
    <div className='other-message-container'>
        <p className='con-icon'>{props1.name[0]}</p>
        <div className='other-text-container'>
            <p className='con-title'>{props1.name}</p>
            <p>{props1.message}</p>
            <p className='chat-timeStamp'>12.00am</p>
        </div>
    </div>
  )
}

export default MessageOthers