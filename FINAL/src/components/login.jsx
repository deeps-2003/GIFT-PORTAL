import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import logbg from "../assets/images/pic3.jpg";
import axios from 'axios';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Attempting login with:", username, password);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/authenticate",
        {
          username: username,
          password: password
        }
      );

      console.log("Login response:", response);

      // Check if the username is "ADMIN" and the password is "admin@123"
      if (username.toUpperCase() === "ADMIN" && password === "admin@123") {
        nav("/ahome");
      } else {
        nav("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className='signin-all' style={{backgroundImage:`url(${logbg})`}}>
      <div className='signin-container'>
        <h1>Login</h1>
        <div className='signin-fields'>
          <form>
            <input
              type='text'
              placeholder='Username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br/><br/>
            <input
              type='password' 
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>
            <button onClick={handleLogin}>LOGIN</button>
            <br></br>
            <Link to="/Register">
              <p className='new' style={{marginTop:'30px',marginLeft:'100px'}}>New customer? Create an account</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
