import React from 'react';
import Item from './Item';

const PostItem = (props) => {
  return (
    <div>
      <h3> Post Items </h3>
      <form onSubmit={e => props.submitForm(e)}>
        <label htmlFor="itemName">Name</label>
        <input
          type="text"
          label="itemName"
          value={props.itemName}
          onChange={props.handleItemNameChange}
          id="itemName"
          placeholder="itemName"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          label="description"
          value={props.description}
          onChange={props.handleDescriptionChange}
          id="description"
          placeholder="description"
        />
        <label htmlFor="photo">Photo URL</label>
          <input
            type="text"
            label="photo"
            value={props.photo}
            onChange={props.handlePhotoChange}
            id="photo"
            placeholder="photo URL"
          />
        <input type="submit" value="Post Item!" />
      </form>
    </div>
  )
}

export default PostItem;
