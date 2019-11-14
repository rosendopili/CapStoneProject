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
    border: 10px solid #2C6AC7;
  }
  .userFrame {
    width: 500px;
    height: 700px;
    margin: 0 auto;
    box-shadow: 0px 10px 15px gray;
    margin-bottom: 20px;
    background-color: #D6890D;
    color: #EDDADA;
    border-radius: 20px;
  }

  a {
    color: white;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: #FFB3B3;
      text-decoration: none;
    }
  }
  h4 {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 15px;
    background-color: #8F3DDB;
    border-radius: 8px;
    color: white;
    padding: 8px;
  }

  .textContainer {
    width: 430px;
    height: 140px;
    border: 10px solid #2C6AC7;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #8F3DDB;
  }
  p {
    margin-top: 10px;
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
    <h4> Community </h4>

      {this.state.users.length > 0 && this.state.users.reverse().map(user => {
        return(
          <div className='userFrame'>
            <img className='profilePicture'
            src={user.profilePic}/>
            <div className='textContainer'>
            <p>location: {user.location}</p>
            <p>bio: {user.bio}</p>
            <a
            className='contactLink' href={`mailto:${user.email}`}>Contact {user.username}!</a>
            </div>
          </div>
        )
      })}
    </div>
  </ProfileStyles>
  )
  }
}
export default ProfilePage;
