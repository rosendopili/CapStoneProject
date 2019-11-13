import React, {Component} from 'react';
import ProfileUpdate from './ProfileUpdate';
import './App.css'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        userProfile: {
        location: "",
        bio: "",
        profilePic: ""
      },
      dataLoaded: false
      }
    }
  }

  UserProfile = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/profile/post/{username}", {
      method: 'POST',
      headers: {
        'Authorization': 'JWT token ' +  localStorage.getItem('user'),
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify ({
        location: this.state.userProfile.location,
        bio: this.state.userProfile.bio,
        profilePic: this.state.userProfile.profilePic
      })
    })
    .then(res => {
      console.log(res, "PROFILE UPLOADED");
      this.setState({
        userProfile: { ... this.state.userProfile},
        dataLoaded: true
      })
    })
    .catch(err=> {
      console.log(err);
    })
  }
  handleLocationChange = e => {
    this.setState({ userProfile: {... this.state.userProfile, location: e.target.value}
    });
  }
  handleBioChange = e => {
    this.setState({ userProfile: {... this.state.userProfile, bio: e.target.value}
    });
  }
  handleProfilePicChange = e => {
    this.setState({ userProfile: {... this.state.userProfile, profilePic: e.target.value}
    });
  }


  render() {
    return (
      <div>

      <h2> Update Profile </h2>

      <ProfileUpdate
      bio={this.state.bio}
      location={this.state.location}
      profilePic={this.state.profilePic}
      handleBionameChange={this.handleBionameChange}
      handleLocationChange={this.handleLocationChange}
      handleProfilePicChange={this.handleProfilePicChange}
      submitForm={e => this.UserProfile(e)}/>

      </div>
    )
  }
}

export default Profile;
