import React from 'react';


function UserInfo(){
   return (
    <div id="userinfo">
      <div id="userinfo-user">
        <div id="photo">
          <img src='https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' id='user-photo'></img>

        </div>
        <div id="username">
          <p> <strong>John Doe</strong> </p>
          <p> @JDoe50 </p>
        </div>
    </div>

      <div id="tweetinfo">
          <div className = "tweetinfo">
            <h3> Tweets </h3>
            <p className = "blue-text"> 128</p>
          </div>
          <div className = "tweetinfo">
            <h3> Following </h3>
            <p className = "blue-text"> 193</p>
          </div>
          <div className = "tweetinfo">
            <h3> Followers </h3>
            <p className = "blue-text"> 26</p>
          </div>
      </div>

      <div id="gain-text">
        <h1> Gain more followers! </h1>
        <p> Promote your account and discovered by more people on twitter! </p>
        <a href='#'>Preview it first below</a>
      </div>
    </div>);
}

export default UserInfo;
