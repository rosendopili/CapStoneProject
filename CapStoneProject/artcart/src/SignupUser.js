import React from 'react';
import styled from 'styled-components';

const SignupStyles = styled.div`

  .signupDiv {
    width: 200px;
    height: 246px;
    background-color: #D18D17;
    border-radius: 25px;
    box-shadow: 0px 10px 20px gray;
    float: left;
  }
  .submit {
    border-radius: 10px;
    font-size: 12px;
    border: none;
    background-color: #2C6AC7;
    color: white;
  }
  label{
    margin-bottom: 0px;
  }
  h5{
    margin-top: 12px;
    margin-bottom: 20px;
    color: white; 
  }
  input {
    border: none;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 5px;
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
        class="submit"
        type="submit" value="Signup" />
      </form>
    </div>
    </SignupStyles>
  )
}

export default SignupUser;
