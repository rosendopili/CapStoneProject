import React from 'react';
import User from '../UserComponent/User';

const LoginUser = (props) => {
  return (
    <div>
      <form onSubmit={props.submitForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          label="username"
          value={props.username}
          onChange={props.handleUsernameChange}
          id="username"
          placeholder="username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          label="email"
          value={props.email}
          onChange={props.handleEmailChange}
          id="email"
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          label="password"
          value={props.password}
          onChange={props.handlePasswordChange}
          id="password"
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default LoginUser;
