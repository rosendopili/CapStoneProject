import React, {Component} from 'react';
import Stats from './Stats';
import RecordStats from './RecordStats';

class StatsHome extends Component {
  constructor (props) {
  super(props);
  this.state = {
    stats: [],
    apiDataLoaded: false
  }

}
componentDidMount(){
  fetch("http://localhost:8081/stats/list")
    .then(res => {
      return res.json();
    })
    .then(res => {
      this.setState({
        stats: res,
        apiDataLoaded: true,
        points: "",
        wins: "",
        losses:"",
      })
    })
}

recordStats = (e) => {
  e.preventDefault();
  fetch("http://localhost:8081/stats", {
    method: 'POST',
    headers: {
      'Accept' : 'application/json, text/plain, */*',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      points: this.state.points,
      wins: this.state.wins,
      losses: this.state.losses
    })
  })
  .then(res=> res.json())
  .then(res => {
    let stats = this.state.stats;
    stats.push(res);
    this.setState({
      stats: stats
    })
  })
}
handlePointsChange = (e) => {
  this.setState({ points: e.target.value })
}
handleWinsChange = (e) => {
  this.setState({ wins: e.target.value})
}
handleLossesChange = (e) => {
  this.setState({ losses: e.target.value})
}

renderStats(){
  return this.state.stats.map((stat, key) => {
      return <Stats stat={stat} key={key}/>
  })
}

  render(){
    return(
      <div>
      {this.state.apiDataLoaded ? ( this.renderStats()
      ):(
        <p> STATS </p>
      )}

      <RecordStats
        points={this.state.points}
        wins={this.state.wins}
        losses={this.state.losses}
        handlePointsChange={this.handlePointsChange}
        handleWinsChange={this.handleWinsChange}
        handleLossesChange={this.handleLossesChange}
        submitForm={this.submitForm}/>

      </div>

    )
  }
}

export default StatsHome;
