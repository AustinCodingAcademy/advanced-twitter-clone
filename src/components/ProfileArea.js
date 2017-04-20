import React from 'react';
//import State from 'State';

class ProfileArea extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			name: "James Puckett",
		}
  }
  render() {
		return(
    <div id='profilearea' className='col-xs-12'>
      <div>
        <div>
          <img src='#'/>
          <div>
            <h3>{this.state.name}</h3>
            <p>user.account</p>
          </div>
        </div>
        <div>
          <div>
            <h5>Tweets</h5>
            <p>user.numberOfTweets</p>
          </div>
          <div>
            <h5>Following</h5>
            <p>user.numberOfFollowing</p>
          </div>
          <div>
            <h5>Followers</h5>
            <p>user.numberOfFollowers</p>
          </div>
        </div>
      </div>
      <div>
        <h5>Gain more followers</h5>
        <p>Promote your account and get discovered by more people on twitter.</p>
        <p>Preview it first below</p>
      </div>
    </div>
    );
  }
}

		 
	export default ProfileArea;