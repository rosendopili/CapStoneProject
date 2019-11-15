import React from 'react';
import styled from 'styled-components';

const PostItemStyles = styled.div `

  .itemForm {
    width: 600px;
    height: 240px;
    margin: 0 auto;
    background-color: #D18D17;
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 20px;
  }

  input {
    width: 100%;
    margin-top: 30px;
    margin: 0 auto;
    border-radius: 5px;
    border: none;
    text-align: center;
    margin-bottom: 30px;
  }

  .submit {
    background-color: #2C6AC7;
    color: white;
    border-radius: 5px;

    &:hover {
      background-color: #388CE0 ;
    }
  }

`;


const PostItem = (props) => {
  return (
    <PostItemStyles>
    <div>
      <form
      className="itemForm"
      onSubmit={e => props.submitForm(e)}>

        <input
          type="text"
          label="itemName"
          value={props.itemName}
          onChange={props.handleItemNameChange}
          id="itemName"
          placeholder="title"
        />

        <input
          type="text"
          label="description"
          value={props.description}
          onChange={props.handleDescriptionChange}
          id="description"
          placeholder="description"
        />

          <input
            type="text"
            label="photo"
            value={props.photo}
            onChange={props.handlePhotoChange}
            id="photo"
            placeholder="photo URL"
          />
        <input
        className="submit"
        type="submit" value="Post Item!" />
      </form>
    </div>
    </PostItemStyles>
  )
}

export default PostItem;
