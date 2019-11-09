import React from 'react';

const Item = props => {
  return (
    <div>
      <p>{props.item.itemName}</p>
      <p>{props.item.description}</p>
      <p>{props.item.price}</p>
    </div>
  )
}

export default Item;
