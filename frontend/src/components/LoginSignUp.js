import React, { useState } from 'react';
import '../styles/components/LoginSignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useAuth } from '../contexts/AuthContext.js';

const Login = ({ onSignUp, onLogin, onClose, onWindowClick }) => {
	const [usernameLogin, setUsernameLogin] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [isSignUp, setSignUp] = useState(false);
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

    // Clear previous error message
    setErrorMessage('');

    // Mocked user data (replace with actual signup logic and API call to the backend)
    const userData = {
      usernameSignUp,
      passwordSignUp,
    };

    // Simulate a successful signup
    onSignUp(userData);

    // Clear form fields after successful signup
    setUsernameSignUp('');
    setPasswordSignUp('');
    setConfirmPasswordSignUp('');

		//

  };

	const {login } = useAuth();

	const handleLogin = () => {
		// Mocked user data (replace with check from backend)
		const dummyUserData = {
			usernameLogin: 'm.lakhani.24471@khi.iba.edu.pk',
			passwordLogin: 'password',
		};

		// Check if the entered credentials match the dummy data
		if (usernameLogin === dummyUserData.usernameLogin && passwordLogin === dummyUserData.passwordLogin) {
			// Simulate a successful login by passing a token (you can generate a random string)
			const token = 'your_dummy_token';
			onLogin(token);
			login()
		} else {
			setErrorMessage('Invalid credentials. Please try again.');
		}
	};

	return (
		<div className='login-popup' onClick={onWindowClick}>
			<button className='exit-button' onClick={onClose}>
				<FontAwesomeIcon icon={icon({name: 'xmark', style: 'solid'})} style={{color: "#0391cb",}} />
			</button>
			{!isSignUp && ( 
			<div className='login-comp'>
				<div className='login-title'>enter your details</div>
				<input className="username" type="text" placeholder='email' value={usernameLogin} onChange={(e) => setUsernameLogin(e.target.value)} />
				<input className="password" type="password" placeholder='password' value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
				<button className="login-button" onClick={handleLogin}>login</button>
				{errorMessage && <div className='error-message'>{errorMessage}</div>}
				<div className='login-footer'>
          Don't have an account? 
					<button className='login-signup-link' onClick={() => setSignUp(true)}>Sign Up</button>
				</div>
			</div>
			)}
			{isSignUp && (
			<div className='signup-comp'>
			<div className='signup-title'>Create an account</div>
			<input className="fullname" type="text" placeholder='name' value={nameSignUp} onChange={(e) => setNameSignUp(e.target.value)} />
      <input className="username" type="text" placeholder='email' value={usernameSignUp} onChange={(e) => setUsernameSignUp(e.target.value)} />
			<input className="phone" type="text" placeholder='phone' value={phoneSignUp} onChange={(e) => setPhoneSignUp(e.target.value)} />
      <input className="password" type="password" placeholder='password' value={passwordSignUp} onChange={(e) => setPasswordSignUp(e.target.value)} />
      <input className="confirm-password" type="password" placeholder='confirm password' value={confirmPasswordSignUp} onChange={(e) => setConfirmPasswordSignUp(e.target.value)} />
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
      <div className='signup-footer'>
        Already have an account? 
        <button className='login-signup-link' onClick={() => setSignUp(false)}>Login</button>
			</div>
			</div>
			)}
		</div>
	);
};

export default Login;
			