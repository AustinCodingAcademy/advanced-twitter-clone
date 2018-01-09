import React from 'react';

function Trending() {
  const compStyle = {
    border: '2px solid yellow'
  }
  const trendStyle = {
    fontSize: '15px',
    color: 'lightBlue',
    display: 'flex',
  }
  const topicStyle= {
    marginLeft: '10px',
    marginRight: '10px'
  }
  return (
    <div style={compStyle}>
      <h2>Trending Topics</h2>
        <ul style={trendStyle}>
          <a style={topicStyle}>#POTUS</a>
          <a style={topicStyle}>#Bitcoin</a>
          <a style={topicStyle}>#AustinCoding</a>
          <a style={topicStyle}>#TwitterProject</a>
          <a style={topicStyle}>#NFL</a>
        </ul>
    </div>
  );
}

export default Trending;
