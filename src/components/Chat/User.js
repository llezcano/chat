import React from 'react';

export default function User(props) {
  return (
    <div>
      <label>Name</label>
      <input
        onChange={props.handleNameChange}
        value={props.name}
        disabled={props.isReady}
      />
      <button
        onClick={props.handleReadyButtonClick}
        disabled={props.isReady}>
        Ready !
      </button>
    </div>
  );
}