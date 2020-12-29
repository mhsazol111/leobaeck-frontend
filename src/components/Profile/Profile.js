import React, { useContext } from 'react';
import classNames from 'classnames';

import { UiContext } from 'context/ui';
import ProfileHead from './ProfileHead';
import ProfileLinks from './ProfileLinks';

const Profile = () => {
	const { uiState: { navProfileMenuOpen } } = useContext(UiContext);
	const profileClasses = classNames('profile', {
		active_mod: navProfileMenuOpen,
	});

	return (
		<div className={profileClasses}>
			<ProfileHead />
			<ProfileLinks />
		</div>
	);
};

export default Profile;
