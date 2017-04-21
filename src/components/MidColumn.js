import React from 'react';
import NewTweet from './NewTweet.js';
import Timeline from './Timeline.js';
function MidColumn(){
   return (
    <div id="midcolumn">
      <NewTweet />
      <Timeline />
    </div>);
}

export default MidColumn;
