import { useState } from 'react';
import '../assets/css/signup.css';
import bgimg1 from '../assets/images/pic4.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Default role value for regular users
      let role = "user";

      // Check if the username is "ADMIN"
      if (username.toUpperCase() === "ADMIN") {
        role = "admin";
      }

      const response = await axios.post(
        "http://localhost:8080/api/user/adduser",
        {
          username: username,
          email: email,
          password: password,
          role: role
        }
      );

      console.log(response);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '150%',
    background: `url(${bgimg1}) center/cover no-repeat`,
    opacity: 1,
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle}>
      <div className='register-all'>
        <div className='register-container'>
          <h1>Register</h1>
          <br></br>
          <div className='register-fields'>
            <input type='text' placeholder='Username' value={username} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
            <Link to="/">
              <button onClick={handleRegister}>Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;