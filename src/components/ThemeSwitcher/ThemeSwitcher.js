import React, { useState, useContext } from 'react';

import { JsonDataContext } from 'context/jsonData';
import { ReactComponent as IconEye } from 'i/icons/eye.svg';
import APP_DATA from 'utils/jsonAppData';

const ThemeSwitcher = () => {
	const { langApp } = useContext(JsonDataContext);
	const [themeState, setThemeState] = useState(false);
	const $body = document.querySelector('body');
	const themeSwitch = () => {
		if (themeState) {
			setThemeState(false);
			$body.classList.remove('dark_mod');
		} else {
			setThemeState(true);
			$body.classList.add('dark_mod');
		}
	};
	return (
		<div className="theme_switcher">
			<div className="theme_switcher_icon">
				<IconEye className="icon icon-eye size_mod" />
			</div>
			<label htmlFor="themeCheck" className="my_account_notifications v2_mod">
				<input id="themeCheck" className="my_account_checkbox switch themeBtn" type="checkbox" onChange={themeSwitch} checked={themeState} />
				<span>{APP_DATA.themeSwitch[langApp]}</span>
			</label>
		</div>
	);
};

export default ThemeSwitcher;
