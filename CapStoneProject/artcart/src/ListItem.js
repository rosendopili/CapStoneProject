import React from 'react';

const ListItem = props => {
  return (
    <div>
      <p>{props.user.item.itemName}</p>
      <p>{props.user.item.description}</p>
      <p>{props.user.item.price}</p>
    </div>
  )
}

export default ListItem;
