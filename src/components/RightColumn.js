import React from 'react';
import FollowWho from './FollowWho.js';
import LiveVideo from './LiveVideo.js';

function RightColumn(){
   return (
    <div id="rightcolumn">
      <FollowWho />
      <LiveVideo />
    </div>);
}

export default RightColumn;
