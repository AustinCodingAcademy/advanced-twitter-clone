import React from 'react';
import UserInfo from './UserInfo.js';
import Trends from './Trends.js';
function LeftColumn(){
   return (
    <div id="leftcolumn">

      <UserInfo />
      <Trends />
    </div>);
}

export default LeftColumn;
