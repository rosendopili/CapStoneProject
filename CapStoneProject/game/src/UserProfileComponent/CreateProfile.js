import React from 'react';
import ProfilePic from './ProfilePic';

const CreateProfile = (props) => {
  return (
    <div>
      <form onSubmit={props.submitForm}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          label="location"
          value={props.location}
          onChange={props.handleLocationChange}
          id="location"
          placeholder="location"
        />
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          label="bio"
          value={props.bio}
          onChange={props.handleBioChange}
          id="bio"
          placeholder="bio"
        />
        <ProfilePic />
        <input type="submit" value="Create Profile" />
      </form>
    </div>
  )
}

export default CreateProfile;
