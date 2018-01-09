import React from 'react';


function Profile(props) {
  const property = {
    user: {
      firstName: 'Cam',
      lastName: 'Gottschall',
      username: 'CGottsJ',
      tweets: 5,
      imgURL: "http://www.tjohearn.com/wordpress/wp-content/uploads/2016/06/twitter-egg-270x270.png"
    }
  }
  const imgStyle = {
    height: '100px',
    width: '100px',
    marginTop: '20px'
  }
  const compStyle = {
    border: '2px solid red'
  }
  return (
    <div style={compStyle}>
      <img src={property.user.imgURL} style={imgStyle} />
      <h2>{property.user.firstName} {property.user.lastName}</h2>
      <h3>Username: {property.user.username}</h3>
      <h4>Tweets: {property.user.tweets}</h4>
    </div>
  )
}

export default Profile;
