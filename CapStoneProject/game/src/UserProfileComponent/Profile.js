import React from 'react';

const Profile = props => {
  return (
    <div>
      <p>{props.stat.location}</p>
      <p>{props.stat.bio}</p>
      <p>{props.stat.profilePic}</p>
    </div>
  )
}

export default Profile;
