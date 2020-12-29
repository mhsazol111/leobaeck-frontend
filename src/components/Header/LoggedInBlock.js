import React, { useContext, useEffect } from 'react';

import { ReactComponent as ArrowDownIcon } from 'i/icons/arrow_down.svg';
import ProfileIcon from 'i/profile.svg';
import { Profile } from 'components/Profile';
import { UiContext } from 'context/ui';

const LoggedInBlock = () => {
	const { toggleNavProfileMenu, uiState: { navProfileMenuOpen } } = useContext(UiContext);

	const onClick = () => {
		toggleNavProfileMenu(!navProfileMenuOpen);
	};

	function handleClickOutside(e) {
		const Block = document.getElementsByClassName('profile')[0];
		if (!e.path.includes(Block)) {
			const loginBtn = document.querySelector('.login_in');
			if (!e.path.includes(loginBtn)) {
				toggleNavProfileMenu(!navProfileMenuOpen);
			}
		}
	}

	useEffect(() => {
		if (navProfileMenuOpen) {
			document.addEventListener('click', handleClickOutside, false);
		} else {
			document.removeEventListener('click', handleClickOutside, false);
		}
		return () => document.removeEventListener('click', handleClickOutside, false);
	}, [
		navProfileMenuOpen,
	]);

	return (
		<div className="login_in_wrap">
			<button type="button" className="login_in" onClick={onClick}>
				<div className="login_in_icon">
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 38 38">
						<defs>
							<clipPath id="a">
								<circle cx={19} cy={19} r={19} fill="none" />
							</clipPath>
						</defs>
						<title>profile</title>
						<g clipPath="url(#a)">
							<path d="M0,19A19,19,0,1,1,19,38,19,19,0,0,1,0,19Z" fill="none" stroke="currentColor" strokeMiterlimit={20} strokeWidth={4} />
						</g>
						<path d="M28.48,28.22h0V27a4.72,4.72,0,0,0-4.72-4.72H14.32A4.72,4.72,0,0,0,9.6,27v1.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
						<path d="M23.76,12.81a4.72,4.72,0,0,1-9.44,0h0a4.72,4.72,0,0,1,9.44,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
					</svg>
				</div>
				<div className="login_in_caret">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.63 9.44">
						<path d="M7.32,9.44,0,2.12,2.12,0l5.2,5.2L12.51,0l2.12,2.12Z" fill="currentColor" />
					</svg>
				</div>
			</button>
			<Profile />
		</div>
	);
};

export default LoggedInBlock;
