import React from 'react';

function Header(){
   return (
    <div id="header">
      <ul id="nav-links">
        <li>Home</li>
        <li>Moments</li>
        <li>Notifications</li>
        <li>Messages</li>
      </ul>

      <div id="search-bar">
        <button>Search Twitter</button>
      </div>

    </div>);
}

export default Header;
