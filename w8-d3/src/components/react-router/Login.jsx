import React from 'react';

const Login = () => {
  return (
    <form>
      <h2>Login Please</h2>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"/>
      <br/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password"/>
      <br/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
