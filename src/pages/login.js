

import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/login',{username, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
 }
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
    <div className="p-3 bg-white w-25">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            placeholder="Enter username"
            className="form-control"
            type="text"
            id="username"
            onChange={e=>setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            placeholder="Enter Password"
            className="form-control"
            type="password"
            id="password"
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
  );
}

export default Login;


