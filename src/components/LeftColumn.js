import React from 'react';
// import state from './state.js';

function LeftColumn(){
  return (
    <div>
      <div id="left-column">
        <div id="user-info">
          <div id="user">
            <figure>
            <div id="avatar"></div>
            <figcaption>
              <h1>Jon Smith</h1>
              <h4>@JonWSmith</h4>
            </figcaption>
            </figure>
          </div>

          <div id="stats">
            <ul>
              <li>
                <h6>Tweets</h6>
                <h2>126</h2>
              </li>
              <li>
                <h6>Following</h6>
                <h2>193</h2>
              </li>
              <li>
                <h6>Followers</h6>
                <h2>26</h2>
              </li>
            </ul>
          </div>

        </div>


        <div id="trends">
          <h5>Trends</h5>
          <ul>
            <li>
              <a href="#">#Bucks</a>
              <p>3,620 Tweets</p>
            </li>
            <li>
              <a href="#">#Bucks</a>
              <p>3,620 Tweets</p>
            </li>
            <li>
              <a href="#">#Bucks</a>
              <p>3,620 Tweets</p>
            </li>
            <li>
              <a href="#">#Bucks</a>
              <p>3,620 Tweets</p>
            </li>
            <li>
              <a href="#">#Bucks</a>
              <p>3,620 Tweets</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
}
export default LeftColumn;

// isn't working yet within the html markup, keeping for ref
// {state.user}{state.user.username}
