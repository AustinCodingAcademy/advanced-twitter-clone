import React from 'react';

function Friends() {
  const compStyle = {
    border: '2px solid purple'
  }
  const friendStyle = {
    fontSize: '12px'
  }
  return (
    <div style={compStyle}>
      <h2>Twitter Friends</h2>
        <ol style={friendStyle}>
          <li>Jordon Reese</li>
          <li>Jon Woo</li>
          <li>Craig Copeland</li>
          <li>Jonathan Whitman</li>
          <li>Shelby Gottschall</li>
        </ol>
    </div>
  );
}

export default Friends;
