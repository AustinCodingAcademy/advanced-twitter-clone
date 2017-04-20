import React from 'react';
// import state from './state.js';
import LeftColumn from './LeftColumn.js';
import CenterColumn from './CenterColumn.js';
import RightColumn from './RightColumn.js';

function Main(){
  return (
    <div id="main">
    <LeftColumn />
    <CenterColumn />
    <RightColumn />
    </div>
    );
}
export default Main;
