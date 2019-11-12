import React from 'react';

const ProfileUpdate = (props) => {
  return (
    <div>
      <form onSubmit={e => props.submitForm(e)}>
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
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default ProfileUpdate;
