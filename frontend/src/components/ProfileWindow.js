import React from 'react';
import "../styles/components/ProfileWindow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useAuth } from '../contexts/AuthContext.js';

const ProfileWindow = ({ user }) => {
    const { isLoggedIn, logout } = useAuth();

    const { email, name } = user;

    const handleViewProfile = () => {
        // Handle view profile logic here
    };

    const handleEventHistory = () => {
        // Handle event history logic here
    };

    const handleLogout = () => {
        logout();
    };

    return (
			<div className="profile-window">
				<div className='left'>
					<p className='user-name'>
						{name}
					</p>
					<p className='user-email'>
						{email}
					</p>
				</div>
				<div className='right'>
					<button className='logout-button' onClick={handleLogout}>
							<FontAwesomeIcon icon={icon({name: 'right-from-bracket', style: 'solid'})} style={{color: "#0391cb",}} />
					</button>
				</div>
			</div>
    );
};

export default ProfileWindow;