import React, {Component} from 'react';
import Profile from './Profile';
import CreateProfile from './CreateProfile'

class UserProfileHome extends Component {
  constructor (props) {
  super(props);
  this.state = {
    profile: [],
    apiDataLoaded: false
  }
}

componentDidMount(){
    fetch("http://localhost:8081/profile/get/{username}")
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          profile: res,
          apiDataLoaded: true,
          location: "",
          bio: "",
          profilePic:"",
        })
      })
  }

  createProfile = (e) => {
    e.preventDefault();
    fetch("http://localhost:8081/profile/post/{username}", {
      method: 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        location: this.state.location,
        bio: this.state.bio,
        profilePic: this.state.profilePic
      })
    })
    .then(res=> res.json())
    .then(res => {
      let user = this.state.profile;
      profile.push(res);
      this.setState({
        profile: profile
      })
    })
  }
  handleLocationChange = (e) => {
    this.setState({ location: e.target.value })
  }
  handleBioChange = (e) => {
    this.setState({ bio: e.target.value})
  }
  handleProfilePicChange = (e) => {
    this.setState({ profilePic: e.target.value})
  }

  renderProfile(){
    return this.state.profile.map((profile, key) => {
        return <Profile profile={Profile} key={key}/>
    })
  }


render(){
  return (
    <div>
    {this.state.apiDataLoaded ? ( this.renderProfile()
      ):(
        <p> Create Profile </p>
      )}

      <CreateProfile
        location={this.state.location}
        bio={this.state.bio}
        profilePic={this.state.profilePic}
        handleLocationChange={this.handleLocationChange}
        handleBioChange={this.handleBioChange}
        handleProfilePicChange={this.handleProfilePicChange}
        submitForm={this.submitForm}/>


    </div>
  );
}
}
export default UserProfileHome;
