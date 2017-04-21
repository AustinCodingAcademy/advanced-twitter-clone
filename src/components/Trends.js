import React from 'react';

function Trends(){
   return (
    <div id="trends">
      <div className = "trends-header">
        <h3> Trends </h3>
      </div>
      <div className = "trends">
        <h3 className='blue-text'>#Bucks</h3>
        <p className = 'trends-tweets'> 3620 Tweets </p>
      </div>
      <div className = "trends">
        <h3 className='blue-text'>#UFC</h3>
        <p className = 'trends-tweets'> 1320 Tweets </p>
      </div>
      <div className = "trends">
        <h3 className='blue-text'>Berkely</h3>
        <p className = 'trends-tweets'>Sounds like Broccoli </p>
      </div>
      <div className = "trends">
        <h3 className='blue-text'>Paul George</h3>
        <p className = 'trends-tweets'>48.7 k Tweets</p>
      </div>
      <div className = "trends">
        <h3 className='blue-text'>#ACA</h3>
        <p className = 'trends-tweets'>Coding is Awesome!</p>
      </div>

    </div>);
}

export default Trends;
