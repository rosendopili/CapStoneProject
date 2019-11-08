import React from 'react';

const User = props => {
  return (
    <div>
      <p>{props.stat.username}</p>
      <p>{props.stat.email}</p>
      <p>{props.stat.password}</p>
    </div>
  )
}

export default User;
