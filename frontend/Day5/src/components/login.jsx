import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';
import logbg from "../assets/images/pic3.jpg";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [error, setError] = useState('');

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password || !role) {
      setError("*Please fill in all fields.");
      return;
    }

    
    if (!isEmailValid()) {
      setError("*Please enter a valid email address.");
      return;
    }

    
    window.location.href = "/home";
  };

  return (
    <div className='signin-all' style={{backgroundImage:`url(${logbg})`}}>
      <div className='signin-container'>
        <h1>Login</h1>
        <div className='signin-fields'>
          <form>
            <input
              type='email'
              placeholder=' Email Address'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/><br/>
            <input
              type='password'
              placeholder=' Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>
            <label htmlFor="role"></label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select><br/><br/>
            <button onClick={handleLogin}>LOGIN</button>
            {error && <p className="error-message">{error}</p>}
            <Link to="/Register"><br/><br/>
              <p>New customer? Create an account</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
