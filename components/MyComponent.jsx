import React, { useState } from 'react';

const MyComponent = (props) => {
  const [message, setMessage] = useState('Hello, World!');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>{message}</h1>
      <input type="text" onChange={handleChange} placeholder="Type a message" />
    </div>
  );
};

export default MyComponent;