import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as IconArrow } from 'i/icons/arrow_next.svg';

import { JsonDataContext } from 'context/jsonData';
import { AuthContext } from 'context/auth';
import { AnimationContext } from 'context/animation';
import { HEADER_ARRAY } from './constant';

// components
import MenuTrigger from './MenuTrigger';
import LogoImg from './LogoImg';
import HeaderMenu from './HeaderMenu';
import HeaderControls from './HeaderControls';

const Header = () => {
	const { langApp, showPopupByKey } = useContext(JsonDataContext);
	const { appBaseData } = useContext(JsonDataContext);
	const { windowWidth } = useContext(AnimationContext);

	const handleOpenPopup = e => {
		e.preventDefault();
		showPopupByKey('virtualExhibit');
	};

	return (
		<header className="header">
			<div className="header_in section_in">
				<div className="header_col">
					<Link className="header_logo" to="/">
						<LogoImg />
					</Link>
					<HeaderMenu
						menuItems={HEADER_ARRAY.headerNavList}
					/>
				</div>
				<div className="header_col">
					{(windowWidth >= 1024) ? <HeaderControls /> : ''}
					<div className="header_btn_wrap">
						<a className="btn_v9" href={HEADER_ARRAY.headerBtnUrl} onClick={handleOpenPopup}>
							{HEADER_ARRAY.headerBtnTitle[langApp]}
							<IconArrow className="icon icon-arrow_next header_btn" />
						</a>
					</div>
				</div>
			</div>
			{(windowWidth < 1024) ? <MenuTrigger /> : ''}
		</header>
	);
};

export default Header;
