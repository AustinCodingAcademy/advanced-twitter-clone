import React from 'react';

function NewTweet(){
   return (
    <div id="newtweet">
      <div id="newtweet-avatar">
        <img src='https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' className='mini-photo'></img>
      </div>
      <div id='newtweet-textarea'>
        <textarea className='newtweet-textarea' placeholder="What's on your mind?"></textarea>
      </div>
      <div>
        <button className='blue-text newtweet-submit'>Submit Tweet </button>
      </div>
    </div>);
}

export default NewTweet;
