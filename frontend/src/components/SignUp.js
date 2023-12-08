// SignUp.js
import React, { useState } from 'react';
import '../styles/components/SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const SignUp = ({ onSignUp, onClose, onWindowClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    // Validate input fields
    if (!username || !password || password !== confirmPassword) {
      setErrorMessage('Please fill in all fields and ensure passwords match.');
      return;
    }

    // Clear previous error message
    setErrorMessage('');

    // Mocked user data (replace with actual signup logic and API call to the backend)
    const userData = {
      username,
      password,
    };

    // Simulate a successful signup
    onSignUp(userData);

    // Clear form fields after successful signup
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='signup-popup' onClick={onWindowClick}>
      <button className='exit-button' onClick={onClose}>
        <FontAwesomeIcon icon={icon({ name: 'xmark', style: 'solid' })} style={{ color: '#0391cb' }} />
      </button>
      <div className='signup-title'>Create an account</div>
      <input className="username" type="text" placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="password" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <input className="confirm-password" type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
      <div className='signup-footer'>Already have an account? <a href='/'>Log In</a></div>
    </div>
  );
};

export default SignUp;
