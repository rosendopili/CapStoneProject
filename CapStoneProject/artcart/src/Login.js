import React, { Component } from 'react';
import LoginUser from './LoginUser';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      },
      loggedIn: false
    }
  }

  UserLogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify ({
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res, "TOKEN RECEIVED");
      this.setState({
        user: { ... this.state.user, token: res},
        loggedIn: true,
      })
      // this.set('user', res.token);
    })
    .catch(err => {
      console.log(err);
    })
  }
  handleUsernameChange = e => {
    this.setState({ user: {... this.state.user, username: e.target.value}
    });
  }
  handlePasswordChange = e => {
    this.setState({ user: {... this.state.user, password: e.target.value}
    });
  }

  render() {
    return(
      <div>
        <h2> Login </h2>

        <LoginUser
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          handleUsernameChange={this.handleUsernameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={e => this.UserLogin(e)}/>

      </div>

    )
  }
}

export default Login;
