import React from 'react';
import Links from './Links';
import Icon from './Icon';
import Search from './Search';

		
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div id="header">
    <Links />
    <Icon />
    <Search />
  </div>);
  }
}

		 
	export default Header;