import React, { Component } from 'react';
import SignupUser from './SignupUser';
import User from './User';
import './App.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        location: "",
        bio: "",
        profilePic: ""
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
        password: this.state.user.password,
        location: this.state.user.location,
        bio: this.state.user.bio,
        profilePic: this.state.user.profilePic
    })
  })
  .then(res=> {
    return res.json();
  })
  .then(res=> {
    console.log(res, "TOKEN RECEIVED");
    this.setState({
      user: { ...this.state.user},
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
handleLocationChange = e => {
  this.setState({ user: {... this.state.user, location: e.target.value}
  });
}
handleBioChange = e => {
  this.setState({ user: {... this.state.user, bio: e.target.value}
  });
}
handleProfilePicChange = e => {
  this.setState({ user: {... this.state.user, profilePic: e.target.value}
  });
}

renderUsername(){
  return this.state.username;
}

  render(){
    return(
      <div>

        <SignupUser
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          location={this.state.location}
          bio={this.state.bio}
          profilePic={this.state.profilePic}
          handleUsernameChange={this.handleUsernameChange}
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleLocationChange={this.handleLocationChange}
          handleBioChange={this.handleBioChange}
          handleProfilePicChange={this.handleProfilePicChange}
          submitForm={e => this.UserSignup(e)}/>

      </div>
    )
  }
}

export default Signup;
