import React from 'react';


function Header () {
  const imgStyle = {
    height: '50px',
    width:'50px',
  }
  const compStyle = {
    display: 'flex',
    border: '2px solid blue'
  }
  return (
    <div style= {compStyle}>
      <img style={imgStyle} src='http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png' />
      <h1>Twitter Clone Project</h1>
    </div>
  )
}

export default Header;
