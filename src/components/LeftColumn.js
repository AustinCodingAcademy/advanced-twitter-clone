import React from 'react';
import ProfileArea from './ProfileArea';
import Trends from './Trends';


function LeftColumn(){
  return (
    <div id='leftColumn' className='col-xs-3'>
      <ProfileArea />
      <Trends />
    </div>
    );
};

export default LeftColumn;