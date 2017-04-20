import React from 'react';
import TweetBox from './TweetBox.js';
import TweetFeed from './TweetFeed.js';

function CenterColumn(){
  return (
    <div class="">
      <div id="center-column">
      <TweetBox />
      <TweetFeed />
      </div>
    </div>
    );
}
export default CenterColumn;
