import React from 'react';
import HeaderIcons from './HeaderIcons.js';
import HeaderLogo from './HeaderLogo.js';
import HeaderSearch from './HeaderSearch.js';

function Header(){
   return (
    <div id="header">
    <HeaderIcons />
    <HeaderLogo />
    <HeaderSearch />
  </div>);
}

export default Header;
