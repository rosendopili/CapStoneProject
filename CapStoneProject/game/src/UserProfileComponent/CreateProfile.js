import React from 'react';

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
        <label htmlFor="profilePic">Profile Picture</label>
        <input
          type="file"
          label="profilePic"
          value={props.profilePic}
          onChange={props.handleProfilePicChange}
          id="profilePic"
          placeholder="profilePic"
        />
        <input type="submit" value="createProfile" />
      </form>
    </div>
  )
}

export default CreateProfile;
