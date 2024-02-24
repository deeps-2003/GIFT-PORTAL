import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.css';
import logbg from "../assets/images/pic3.jpg";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Added role state
  const [error, setError] = useState('');

  const isEmailValid = () => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email, password, and role are not empty before navigating
    if (!email || !password || !role) {
      setError("*Please fill in all fields.");
      return;
    }

    // Check if the email is in a valid format
    if (!isEmailValid()) {
      setError("*Please enter a valid email address.");
      return;
    }

    // You can add your authentication logic here
    // For now, let's simulate a successful login by navigating to "/home"
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
            {/* Added Role dropdown */}
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
