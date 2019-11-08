import React from 'react';

const RecordStats = (props) => {
  return (
    <div>
      <h3> Test Stats </h3>
      <form onSubmit={props.submitForm}>
        <label htmlFor="points">Points</label>
        <input
          type="text"
          label="points"
          value={props.points}
          onChange={props.handlePointsChange}
          id="points"
          placeholder="points"
        />
        <label htmlFor="wins">Wins</label>
        <input
          type="text"
          label="wins"
          value={props.wins}
          onChange={props.handleWinsChange}
          id="wins"
          placeholder="wins"
        />
        <label htmlFor="losses">Losses</label>
        <input
          type="text"
          label="losses"
          value={props.losses}
          onChange={props.handleLossesChange}
          id="losses"
          placeholder="losses"
        />
        <input type="submit" value="Record Stats" />
      </form>
    </div>
  )
}

export default RecordStats;
