import React, { Component } from 'react';
import SignupUser from './SignupUser';
import User from './User';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
      },
      loggedIn: false
    }
  }

UserSignup = (e) => {
  e.preventDefault();

  fetch("http://localhost:8080/signup", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify ({
        username: this.state.user.username,
        email: this.state.user.email,
        password: this.state.user.password
    })
  })
  .then(res=> {
    return res.json();
  })
  .then(res=> {
    console.log(res, "TOKEN RECEIVED");
    this.setState({
      user: { ...this.state.user, res},
      loggedIn: true
    });
    localStorage.setItem('user', res.token);
  })
  .catch(err=> {
    console.log(err);
  });
}

handleUsernameChange = e => {
  this.setState({ user: {... this.state.user, username: e.target.value}
  });
}
handleEmailChange = e => {
  this.setState({ user: {... this.state.user, email: e.target.value}
  });
}
handlePasswordChange = e => {
  this.setState({ user: {... this.state.user, password: e.target.value}
  });
}

renderUsername(){
  return this.state.username;
}

  render(){
    return(
      <div>

      <p> Welcome {this.renderUsername()}</p>

        <h2> SignUp </h2>

        <SignupUser
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          handleUsernameChange={this.handleUsernameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          submitForm={e => this.UserSignup(e)}/>

      </div>
    )
  }
}

export default Signup;
