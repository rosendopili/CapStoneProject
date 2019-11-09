import React from 'react';

const Profile = props => {
  return (
    <div>
      <p>{props.profile.location}</p>
      <p>{props.profile.bio}</p>
      <p>{props.profile.profilePic}</p>
    </div>
  )
}

export default Profile;
