import React, {Component} from 'react';
import User from './User';
import SignupUser from './SignupUser';
import CreateProfile from '../UserProfileComponent/CreateProfile';
import ProfilePic from '../UserProfileComponent/ProfilePic';
import Login from '../UserLogin/Login';

class Home extends Component {
  constructor (props) {
  super(props);
  this.state = {
    user: [],
    apiDataLoaded: false
  }
}

  userSignup = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/signup", {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json',
        'Authorization' : 'bearer'
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


render(){
  return (
    <div>
        <p> SIGNUP</p>

      <SignupUser
        username={this.state.username}
        email={this.state.email}
        password={this.state.password}
        handleUsernameChange={this.handleUsernameChange}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        submitForm={this.submitForm}/>

        <Login />

        <CreateProfile />

    </div>
  );
}
}
export default Home;
