import React from 'react';

const buttonStyle= {
  background: 'lightBlue',
  marginLeft: '10px',
  marginRight: '10px'
}

function NavBar () {
  const compStyle = {
    display: 'flex',
    border: '2px solid green'
  }
  return (
    <div style={compStyle}>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>Tweets</button>
      <button style={buttonStyle}>Friends</button>
      <button style={buttonStyle}>Trending</button>
      <button style={buttonStyle}>News</button>
    </div>
  )
}

export default NavBar;
