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

  componentDidMount(){
    fetch("http:localhost:8081/login")
    .then(res => {
      return res.json();
    })
    .then(res => {
      this.setState({
        user: res,
        apiDataLoaded: true,
        username: "",
        password: "",
        email: ""
      })
    })
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
        password: this.state.password,
        email: this.state.email
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

  renderUser() {
    return this.state.user.map((user, key) => {
      return <User user={user} key={key}/>
  })
}
  render(){
    return(
      <div>
      {this.state.apiDataLoaded ? ( this.renderUser()
        ):(
          <p> LOGIN </p>
        )}
        <LoginUser
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          handleUsernameChange={this.handleUsernameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={this.submitForm}/>
      </div>
    )
  }
}

export default Login;
