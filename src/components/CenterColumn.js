import React from 'react';
import TweetBar from './TweetBar';
import Updates from './Updates';

function CenterColumn(){
  return (
    <div id='centercolumn' className='col-xs-6'>
      <TweetBar />
      <Updates />
    </div>
    );
};

export default CenterColumn;