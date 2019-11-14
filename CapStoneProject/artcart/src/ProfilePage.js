import React, { Component } from 'react';
import styled from 'styled-components';

const ProfileStyles = styled.div`

  .profilePicture {
    width: 430px;
    height: 500px;
    object-fit: cover;
    margin-top: 20px;
    box-shadow: 0px 10px 15px #634513;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  .userFrame {
    width: 500px;
    height: 660px;
    margin: 0 auto;
    box-shadow: 0px 10px 15px gray;
    margin-bottom: 20px;
    background-color: #D6890D;
    color: #EDDADA;
    border-radius: 20px;
  }

  a {
    color: #634513;
    font-weight: bold;

    &:hover {
      color: white;
      text-decoration: none;
    }
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
    fetch("http://localhost:8082/user/list", {
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
      {this.state.users.length > 0 && this.state.users.reverse().map(user => {
        return(
          <div className='userFrame'>
            <img className='profilePicture'
            src={user.profilePic}/>
            <p>location: {user.location}</p>
            <p>bio: {user.bio}</p>
            <a
            className='contactLink' href={`mailto:${user.email}`}>Contact {user.username}!</a>
          </div>
        )
      })}
    </div>
  </ProfileStyles>
  )
  }
}
export default ProfilePage;
