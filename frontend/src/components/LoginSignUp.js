import React, { useState } from 'react';
import '../styles/components/LoginSignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useAuth } from '../contexts/AuthContext.js';
import axios from 'axios';
const fs = require('fs');

const copyImage = (sourcePath, destinationPath) => {
  fs.copyFile(sourcePath, destinationPath, (err) => {
    if (err) {
      console.log('Error occurred while copying the image: ', err);
    } else {
      console.log('Image copied successfully');
    }
  });
};



const Login = ({ onSignUp, onLogin, onClose, onWindowClick }) => {
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSignUp, setSignUp] = useState(false);
  const [confirmPassword] = useState('');
  const [usernameSignUp, setUsernameSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState('');
  const [nameSignUp, setNameSignUp] = useState('');
  const [phoneSignUp, setPhoneSignUp] = useState('');

  const handleSignUp = () => {
    // Validate input fields
    if (!usernameSignUp || !passwordSignUp || passwordSignUp !== confirmPasswordSignUp) {
      setErrorMessage('Please fill in all fields and ensure passwords match.');
      return;
    }

	  console.log('Data being sent from React app:', {
		name: nameSignUp,
		email: usernameSignUp,
		phone: phoneSignUp,
		password: passwordSignUp,
	  });



    // Clear previous error message
    setErrorMessage('');

    // Make API call to signup endpoint
    axios
      .post('http://localhost:8081/insertData', {
        name: nameSignUp,
        email: usernameSignUp,
        phone: phoneSignUp,
        password: passwordSignUp,
      })
      .then((response) => {
        const { success, message } = response.data;

        if (success) {
          copyImage('./src/assets/profile-pictures/dummy.jpg', `./src/assets/profile-pictures/${usernameSignUp}.jpg`);
          // Successful signup
          onSignUp();
          setSignUp(false); // Switch to login view after successful signup
        } else {
          setErrorMessage(message || 'Signup failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error during signup (this is react app error):', error);
        setErrorMessage('Internal server error. Please try again later.');
      });
  };

  const { isLoggedIn, login } = useAuth();

  const handleLogin = () => {
	// Make API call to login endpoint
	// Log the data being sent to the login API
	console.log('Data being sent to login API:', {
	  email: usernameLogin,
	  password: passwordLogin,
	});
  
	axios
	  .post('http://localhost:8081/login', {
		email: usernameLogin,
		password: passwordLogin,
	  })
	  .then((response) => {
		const { success } = response.data;
  
		if (success) {
      //@SAAD: i dont know how these two functions are working here but jo email opar hai 'email: usernameLogin' 
      //send that to AuthContext and Userpage too
		  // Successful login
		  onLogin();
		  login(usernameLogin);
		} else {
		  setErrorMessage('Invalid credentials. Please try again.');
		}
	  })
	  .catch((error) => {
		console.error('Error during login:', error);
		setErrorMessage('Internal server error. Please try again later.');
	  });
  };
  
  return (
    <div className='login-popup' onClick={onWindowClick}>
      <button className='exit-button' onClick={onClose}>
        <FontAwesomeIcon icon={icon({ name: 'xmark', style: 'solid' })} style={{ color: '#0391cb' }} />
      </button>
      {!isSignUp && (
        <div className='login-comp'>
          <div className='login-title'>enter your details</div>
          <input className='username' type='text' placeholder='email' value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)} />
          <input className='password' type='password' placeholder='password' value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
          <button className='login-button' onClick={handleLogin}>
            login
          </button>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
          <div className='login-footer'>
            Don't have an account?
            <a href='#' onClick={() => setSignUp(true)}>
              Sign Up
            </a>
          </div>
        </div>
      )}
      {isSignUp && (
        <div className='signup-comp'>
          <div className='signup-title'>Create an account</div>
          <input className='fullname' type='text' placeholder='name' value={nameSignUp} onChange={(e) => setNameSignUp(e.target.value)} />
          <input className='username' type='text' placeholder='email' value={usernameSignUp} onChange={(e) => setUsernameSignUp(e.target.value)} />
          <input className='phone' type='text' placeholder='phone' value={phoneSignUp} onChange={(e) => setPhoneSignUp(e.target.value)} />
          <input className='password' type='password' placeholder='password' value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} />
          <input className='confirm-password' type='password' placeholder='confirm password' value={confirmPasswordSignUp} onChange={(e) => setConfirmPasswordSignUp(e.target.value)} />
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
          <button className='signup-button' onClick={handleSignUp}>
            Sign Up
          </button>
          <div className='signup-footer'>
            Already have an account?
            <a href='#' onClick={() => setSignUp(false)}>
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
