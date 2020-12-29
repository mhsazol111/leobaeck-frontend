import React, { useContext } from 'react';
import { JsonDataContext } from '../../context/jsonData';
import { UiContext } from '../../context/ui';

const LoginMenuList = ({
	loginList,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { openPopup } = useContext(UiContext);

	const handleClick = (btnId) => {
		switch (btnId) {
		case 'login':
			openPopup('login');
			break;
		case 'signup':
			openPopup('signup');
			break;
		default:
		}
	};

	return (
		<ul className="login_menu_list">
			{loginList.map(({
				id,
				title,
				popup,
			}, index) => {
				return (
					<li className="login_menu_item" key={`login_menu_item-${index}`}>
						<span
							role="button"
							className="login_menu_link"
							onClick={() => handleClick(id)}
							onKeyDown={() => {}}
							tabIndex={index}
						>
							{title[langApp]}
						</span>
					</li>
				);
			})}
		</ul>
	);
};

export default LoginMenuList;
