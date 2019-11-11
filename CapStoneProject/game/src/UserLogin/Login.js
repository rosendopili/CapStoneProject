import React, { Component } from 'react';
import User from '../UserComponent/User';
import LoginUser from './LoginUser';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      apiDataLoaded: false
    }
  }

  loginUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/login", {
      method: 'POST',
      headers: {
        'Accept' : 'appication/json, text/plain, */',
        'Content-Type' : 'applicaiton/json',
        'Authoerization' : 'bearer'
      },
      body: JSON.stringify({
        username: this.state.username,
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
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value})
  }

  render(){
    return(
      <div>

          <p> LOGIN </p>

        <LoginUser
          username={this.state.username}
          password={this.state.password}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={this.submitForm}/>
      </div>
    )
  }
}

export default Login;
