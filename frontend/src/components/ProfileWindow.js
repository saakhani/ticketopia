import React from 'react';
import "../styles/components/ProfileWindow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useAuth} from '../contexts/AuthContext.js';

const ProfileWindow = ({onWindowClick, onClose }) => {
	function getImage(imgSrc) {
    try {
      return require(`../assets/profile-pictures/${imgSrc}`);
    } catch (err) {
      return require('../assets/profile-pictures/dummy.jpg');
    }
  }

    const {logout, user } = useAuth();

    const name = user.name;
		const email = user.email;
		// const profilePicture = require(`../assets/profile-pictures/${email}.jpg`)

		const handleLogout = () => {
			if (window.location.pathname === '/user'){
				window.location.href = '/';
			}
			handleClose();
			logout();

			// Check if the current page is the user page
			// if (window.location.pathname === '/user') {
			// 	window.location.href = '/';
			// }
		};

		const handleClose = () => {
			//call the onClose function passed from the parent component
			onClose();
		}

    return (
			<div className="profile-window" onClick={onWindowClick}>
				<div className='left'>
					<p className='user-name'>
						{name}
					</p>
					<p className='user-email'>
						{email}
					</p>
					<a className='view-profile' href='/user'>view profile</a>
				</div>
				<div className='right'>
					<img className = "profile-image" src={getImage(user.imgSrc)} alt="Profile" />  
					<button className='logout-button' onClick={handleLogout}>
							<FontAwesomeIcon icon={icon({name: 'right-from-bracket', style: 'solid'})} style={{color: "#0391cb",}} />
					</button>
				</div>
			</div>
    );
};

export default ProfileWindow;