import React, { useContext } from 'react';

import { AuthContext } from 'context/auth';
import { HEADER_ARRAY } from './constant';

// components
import HeaderSearchForm from './HeaderSearchForm';
import HeaderLangList from './HeaderLangList';
import LoginMenuList from './LoginMenuList';
import LoggedInBlock from './LoggedInBlock';

const Header = () => {
	const { loggedIn } = useContext(AuthContext);

	return (
		<>
			<div className="header_search">
				<HeaderSearchForm />
			</div>
			<div className="header_lang_w">
				<HeaderLangList
					langList={HEADER_ARRAY.headerLangList}
				/>
			</div>
			<div className="login_menu_w">
				{loggedIn ? (
					<LoggedInBlock />
				) : (
					<LoginMenuList
						loginList={HEADER_ARRAY.headerLoginList}
					/>
				)}
			</div>
		</>
	);
};

export default Header;
