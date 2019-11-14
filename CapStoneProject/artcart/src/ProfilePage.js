import React, { Component } from 'react';

class ProfilePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [],
      userLoaded: false
    }
  }
  GetUserProfile = (e) => {
    e.preventDefault(); 
    fetch("http://localhost:8080/user", {
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
        user: res,
        userLoaded: true,
      })
    })
  }
  render(){
    return(
    <div className='profileFrame'>
      {this.state.user.length > 0 && this.state.user.map(user => {
        return(
          <div className='userFrame'>
          <h4> Welcome {user.username} </h4>
            <img className='profilePicture'
            src={user.profilePic}/>
            <p>{user.location}</p>
            <p>{user.bio}</p>
          </div>
        )
      })}
    </div>
  )
  }
}
export default ProfilePage;
