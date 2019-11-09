import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      <h3> Post Items </h3>
      <form onSubmit={props.submitForm}>
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
        <label htmlFor="price">Price</label>
        <input
          type="text"
          label="price"
          value={props.price}
          onChange={props.handlePriceChange}
          id="price"
          placeholder="price"
        />
        <input type="submit" value="Post Item!" />
      </form>
    </div>
  )
}

export default PostItem;
