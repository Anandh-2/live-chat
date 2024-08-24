import React from 'react'

function MessageSelf() {
  var props2={name: "You", message: "This is a sample message"}
  return (
    <div className='self-message-container'>
      <div className='message-box'>
        <p className='con-title'>{props2.name}</p>
        <p>{props2.message}</p>
        <p className='chat-timeStamp'>12.00am</p>
      </div>
    </div>
  )
}

export default MessageSelf