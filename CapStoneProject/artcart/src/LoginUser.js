import React from 'react';

const LoginUser = (props) => {
  return (
    <div>
      <form onSubmit={e => props.submitForm(e)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          label="username"
          value={props.username}
          onChange={props.handleUsernameChange}
          id="username"
          placeholder="username"
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
