import React from 'react';

function CreateTweet() {
  const compStyle = {
    border: '2px solid blue'
  }
  return (
    <div style={compStyle}>
      <input placeholder="What is going on...?" />
      <button>Send</button>
    </div>
  )
}

export default CreateTweet;
