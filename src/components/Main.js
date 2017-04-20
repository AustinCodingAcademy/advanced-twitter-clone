import React from 'react';
import LeftColumn from './LeftColumn';
import CenterColumn from './CenterColumn';
import RightColumn from './RightColumn';

function Main(){
  return (
    <div id="mainBody">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </div>
    );
}
export default Main;