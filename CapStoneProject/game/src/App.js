import React, { Component } from 'react';
import Stat from './Stat';
import RecordStats from './RecordStats';
import User from './User';
import SignupUser from './SignupUser';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      stats: [],
      user: [],
      apiDataLoaded: false
    }

  }

  componentDidMount(){
    fetch("http://localhost:8081/users")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          user: res,
          apiDataLoaded: true,
          username: "",
          email: "",
          password:"",
        })
      })
  }

  userSignup = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/signup", {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(res=> res.json())
    .then(res => {
      let user = this.state.user;
      user.push(res);
      this.setState({
        user: user
      })
    })
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value})
  }

  renderUser(){
    return this.state.user.map((user, key) => {
        return <User user={user} key={key}/>
    })
  }
  //
  // componentDidMount(){
  //   fetch("http://localhost:8081/stats/list")
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(res => {
  //       this.setState({
  //         stats: res,
  //         apiDataLoaded: true,
  //         points: "",
  //         wins: "",
  //         losses:"",
  //       })
  //     })
  // }
  //
  // recordStats = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8081/stats", {
  //     method: 'POST',
  //     headers: {
  //       'Accept' : 'application/json, text/plain, */*',
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify({
  //       points: this.state.points,
  //       wins: this.state.wins,
  //       losses: this.state.losses
  //     })
  //   })
  //   .then(res=> res.json())
  //   .then(res => {
  //     let stats = this.state.stats;
  //     stats.push(res);
  //     this.setState({
  //       stats: stats
  //     })
  //   })
  // }
  // handlePointsChange = (e) => {
  //   this.setState({ points: e.target.value })
  // }
  // handleWinsChange = (e) => {
  //   this.setState({ wins: e.target.value})
  // }
  // handleLossesChange = (e) => {
  //   this.setState({ losses: e.target.value})
  // }
  //
  // renderStats(){
  //   return this.state.stats.map((stat, key) => {
  //       return <Stat stat={stat} key={key}/>
  //   })
  // }

  render(){
  return (
      <div className="App">

        {this.state.apiDataLoaded ? ( this.renderUser()
        ):(
          <p> SIGNUP </p>
        )}

        <SignupUser
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          handleUsernameChange={this.handleUsernameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={this.submitForm}/>

                  </div>
          // {this.state.apiDataLoaded ? ( this.renderStats()
          // ):(
          //   <p> STATS </p>
          // )}

          // <RecordStats
          //   points={this.state.points}
          //   wins={this.state.wins}
          //   losses={this.state.losses}
          //   handlePointsChange={this.handlePointsChange}
          //   handleWinsChange={this.handleWinsChange}
          //   handleLossesChange={this.handleLossesChange}
          //   submitForm={this.submitForm}/>


    );
  }
}

export default App;
