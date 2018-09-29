import React from 'react';
import MessageInput from './MessageInput';
import Messages from './Messages';
import User from './User';

export default function Chat(props) {
  return (
    <div>
      <User
        name={props.name}
        isReady={props.isReady}
        handleNameChange={props._onNameChange}
        handleReadyButtonClick={props._onReadyButtonClick}
      />
      <Messages
        messages={props.messages}
      />
      <MessageInput
        message={props.message}
        handleMessageChange={props._onMessageChange}
        isReady={props.isReady}
        handleSendButtonClick={props._onSendButtonClick}
      />
    </div>
  );
}
