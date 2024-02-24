import { useState } from 'react';
import '../assets/css/signup.css';
import bgimg1 from '../assets/images/pic4.jpg';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backgroundStyle = {
    position:'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '150%',
    background: `url(${bgimg1}) center/cover no-repeat`,
    opacity: 1,
    zIndex: -1, // Lower zIndex for background
  };
  const handleCreateAccount = () => {
    if (!name || !phoneNumber || !dob || !email || !password) {
      // Display an alert if any field is empty
      alert('Please fill in all fields before creating an account.');
    } else if (phoneNumber.length !== 10) {
      // Display an alert if phone number does not have 10 digits
      alert('Phone number must be 10 digits long.');
    } else {
      // Perform the registration logic here
      // Redirect or show success message, etc.
      console.log('Account created successfully!');
    }
  };

  return (
    <div style={backgroundStyle}>
    <div className='register-all'>
      <div className='register-container'>
        <h1>Register</h1>
        <br></br>
        <div className='register-fields'>
          <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
          <input type='tel' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br/><br/>
          <input type='date' placeholder='Date Of Birth' value={dob} onChange={(e) => setDOB(e.target.value)} /><br/><br/>
          <input type='email' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
          <Link to="/">
            <button onClick={handleCreateAccount} >Create Account</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;