import React from 'react';

export default function MessageInput(props) {
  return (
    <div>
      <label>Message: </label>
      <input
        onChange={props.handleMessageChange}
        value={props.message}
        disabled={!props.isReady}
      />
      <button
        onClick={props.handleSendButtonClick}
        disabled={!props.message || !props.isReady}
      >
        Send
      </button>
    </div>
  );
}