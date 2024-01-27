import React, { useState } from 'react'

const Auth = () => {
  return (
    <div className='Auth'>
      <Login/>
      <Register/>
    </div>
  )
}

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="auth-container">
      <form>
        <h2> Register </h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div>Login</div>
  )
}




export default Auth