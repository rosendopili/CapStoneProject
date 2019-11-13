import React from 'react';
import styled from 'styled-components';

const LoginStyles = styled.div`

    .loginDiv {
      width: 200px;
      height: 246px;
      background-color: #D18D17;
      border-radius: 25px;
      box-shadow: 0px 10px 20px gray;
      float: right;
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
      margin-bottom: 35px;
      color: white;
    }
    input {
      border: none;
      text-align: center;
      margin-bottom: 35px
      border-radius: 5px;
    }
`;

const LoginUser = (props) => {
  return (
    <LoginStyles>
    <div className="loginDiv">
    <h5> Login </h5>
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
          type="password"
          label="password"
          value={props.password}
          onChange={props.handlePasswordChange}
          id="password"
          placeholder="password"
        />
        <input className="submit" type="submit" value="Login" />
      </form>
    </div>
    </LoginStyles>
  )
}

export default LoginUser;
