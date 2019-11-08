import React from 'react';

const Stat = props => {
  return (
    <div>
      <p>{props.stat.points}</p>
      <p>{props.stat.wins}</p>
      <p>{props.stat.losses}</p>
    </div>
  )
}

export default Stat; 
