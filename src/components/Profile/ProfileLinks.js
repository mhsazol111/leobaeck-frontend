import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Session from 'utils/Session';
import { UiContext } from 'context/ui';
import { PROFILE_LINKS } from './constant';
import { JsonDataContext } from '../../context/jsonData';
import { AuthContext } from '../../context/auth';

const ProfileLinks = () => {
	const { langApp } = useContext(JsonDataContext);
	const { toggleNavProfileMenu, uiState: { navProfileMenuOpen } } = useContext(UiContext);
	const {
		setCurrentUser,
		setLoggedIn,
	} = useContext(AuthContext);

	const handleClick = (e, btnId) => {
		if (btnId === 'logout') {
			e.preventDefault();
			(Session.getSession()).removeToken();
			setCurrentUser(null);
			setLoggedIn(false);
		}
		toggleNavProfileMenu(!navProfileMenuOpen);
		return true;
	};

	return (
		<ul className="profile_links">
			{PROFILE_LINKS.map(({
				id,
				url,
				title,
				Icon,
			}, index) => {
				return (
					<li className="profile_links_item" key={index}>
						<Link
							className="profile_link"
							to={url}
							onClick={e => { handleClick(e, id); }}
						>
							<div className="profile_link_icon">
								<Icon className="icon size_mod" />
							</div>
							<div className="profile_link_title">{title[langApp]}</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default ProfileLinks;
