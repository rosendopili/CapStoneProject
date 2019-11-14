import React, { Component } from 'react';
import styled from 'styled-components';

const ProfileStyles = styled.div`

  .profilePicture {
    width: 400px;
    height: 500px;
    object-fit: cover;
  }

  .userFrame {
    width: 450px;
    height: 600px;
    border: 1px solid black;
  }

`;

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      userLoaded: false
    }
  }
  componentDidMount = () => {
    fetch("http://localhost:8080/user/list", {
      method: 'GET',
      headers: {
        'Authorization':'Bearer ' + localStorage.getItem('user'),
        'Content-Type':'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          users: res,
          userLoaded: true,
      })
    })
  }

  render(){
    return(
  <ProfileStyles>
    <div className='profileFrame'>
      {this.state.users.length > 0 && this.state.users.map(user => {
        return(
          <div className='userFrame'>
            <img className='profilePicture'
            src={user.profilePic}/>
            <p>{user.location}</p>
            <p>{user.bio}</p>
            <a href={`mailto:${user.email}`}>Contact {user.username}</a>
          </div>
        )
      })}
    </div>
  </ProfileStyles>
  )
  }
}
export default ProfilePage;
