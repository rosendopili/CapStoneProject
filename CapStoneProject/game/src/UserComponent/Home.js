import React, {Component} from 'react';
import User from './User';
import SignupUser from './SignupUser'

class Home extends Component {
  constructor (props) {
  super(props);
  this.state = {
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


render(){
  return (
    <div>
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
  );
}
}
export default Home;
