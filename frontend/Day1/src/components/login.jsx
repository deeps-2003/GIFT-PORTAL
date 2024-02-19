// Import necessary modules
import { useState } from 'react';
import '../assets/css/login.css';

// Login component
const Login = () => {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (validate credentials, etc.)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login_head'>
      <h2>ONLINE GIFT PORTAL</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username" className='login_username'>Username : </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password" className='login_password'>Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
