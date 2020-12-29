import React, { useContext } from 'react';
import { AuthContext } from 'context/auth';
import ProfileIcon from 'i/profile2.svg';

const ProfileHead = () => {
	const { currentUser: { firstName, lastName, email } } = useContext(AuthContext);

	return (
		<div className="profile_head">
			<div className="profile_img_wrap">
				<img className="profile_img" src={ProfileIcon} alt="profile avatar" />
			</div>
			<div className="profile_head_content">
				<div className="profile_name">{`${firstName} ${lastName}`}</div>
				<div className="profile_mail">{email}</div>
			</div>
		</div>
	);
};

export default ProfileHead;
