import React from 'react';

export default function Messages(props) {
  if (!props.messages.length) {
    return (<label> No messages yet ! </label>);
  } else {
    return (
      <div>
      { props.messages.map(({user, msg}, key) => (
          <label key={key}>
            # {user} says: {msg}
            <br/>
          </label>
        ))
      }
      </div>
    );
  }
}