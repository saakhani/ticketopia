import React, { useState } from 'react';
import '../styles/components/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Login = ({ onLogin, onClose }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		// Mocked user data (replace with your dummy data)
		const dummyUserData = {
			username: 'user',
			password: 'password',
		};

		// Check if the entered credentials match the dummy data
		if (username === dummyUserData.username && password === dummyUserData.password) {
			// Simulate a successful login by passing a token (you can generate a random string)
			const token = 'your_dummy_token';
			onLogin(token);
		} else {
			console.error('Login failed: Invalid credentials');
		}
	};

	return (
		<div className='login-popup'>
			<button className='exit-button' onClick={onClose}>
				<FontAwesomeIcon icon={icon({name: 'xmark', style: 'solid'})} style={{color: "#0391cb",}} />
			</button>
			<div className='login-title'>enter your details</div>
			<input className="username" type="text" placeholder='email' value={username} onChange={(e) => setUsername(e.target.value)} />
			<input className="password" type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
			<button className="login-button" onClick={handleLogin}>login</button>
			<div className='login-footer'>Don't have an account? <a href='/'>Sign up</a></div>
		</div>
	);
};

export default Login;
			