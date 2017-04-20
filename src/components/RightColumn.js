import React from 'react';
import Follow from './Follow';
import LiveVideo from './LiveVideo';

function RightColumn(){
  return (
    <div id='rightcolumn' className='col-xs-3'>
    right column
    <Follow />
    <LiveVideo />
    </div>
    );
}

export default RightColumn;