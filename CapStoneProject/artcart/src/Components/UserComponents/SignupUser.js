import React from 'react';
import styled from 'styled-components';

const SignupStyles = styled.div`

  .signupDiv {
    width: 200px;
    height: 430px;
    background-color: #D18D17;
    border-radius: 33px;
    box-shadow: 0px 10px 20px gray;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .submit {
    border-radius: 10px;
    font-size: 12px;
    border: none;
    background-color: #2C6AC7;
    color: white;
    width: 180px;
    margin-top: 0px;
    margin-bottom: 4px;
    height: 25px;
    &:hover {
      background-color: #388CE0 ;
    }
  }
  h5{
    padding-top: 16px;
    margin-bottom: 18px;
    color: white;
  }
  input {
    border: none;
    text-align: center;
    margin-bottom: 18px;
    border-radius: 8px;
    width: 180px;
  }
  #bio {
    width: 180px;
    height: 60px;
    word-wrap: break-word;
    margin-bottom: 18px;
    border-radius: 8px;
    border: none;
    text-align: center;
  }
  a{
    margin-top: 0;

    &:hover {
      text-decoration: none;
      color: #AB03FF; 
    }
  }

`;

const SignupUser = (props) => {
  return (
    <SignupStyles>
    <div className="signupDiv">
    <h5> Signup </h5>
      <form onSubmit={e => props.submitForm(e)}>
        <input
          type="text"
          label="username"
          value={props.username}
          onChange={props.handleUsernameChange}
          id="username"
          placeholder="username"
        />
        <input
          type="text"
          label="email"
          value={props.email}
          onChange={props.handleEmailChange}
          id="email"
          placeholder="email"
        />
        <input
          type="password"
          label="password"
          value={props.password}
          onChange={props.handlePasswordChange}
          id="password"
          placeholder="password"
        />
        <input
          type="text"
          label="location"
          value={props.location}
          onChange={props.handleLocationChange}
          id="location"
          placeholder="location"
        />
        <textarea
          type="text"
          label="bio"
          value={props.bio}
          onChange={props.handleBioChange}
          id="bio"
          placeholder="bio"
        />
        <input
          type="profilePic"
          label="profilePic"
          value={props.profilePic}
          onChange={props.handleProfilePicChange}
          id="profilePic"
          placeholder="profile picture url"
        />
        <input
        className="submit"
        type="submit"
        value="Signup"
          />
        <a href="./Home"> have an account? </a>
      </form>

    </div>
    </SignupStyles>
  )
}

export default SignupUser;
