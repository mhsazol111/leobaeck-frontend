import React, { useContext } from 'react';
import { ReactComponent as IconArrow } from 'i/icons/arrow_next.svg';
import { AnimationContext } from 'context/animation';

import { JsonDataContext } from 'context/jsonData';
import { HEADER_ARRAY } from './constant';

import HeaderMenuList from './HeaderMenuList';
import HeaderControls from './HeaderControls';

const HeaderMenu = ({
	menuItems,
}) => {
	const { langApp, showPopupByKey } = useContext(JsonDataContext);
	const { windowWidth } = useContext(AnimationContext);

	const handleOpenPopup = e => {
		e.preventDefault();
		showPopupByKey('virtualExhibit');
	};

	return (
		<nav className="header_nav">
			{(windowWidth < 1024) && (
				<div className="mobile_top_nav">
					<div className="header_btn_wrap">
						<a className="btn_v9" href={HEADER_ARRAY.headerBtnUrl} onClick={handleOpenPopup}>
							{HEADER_ARRAY.headerBtnTitle[langApp]}
							<IconArrow className="icon icon-arrow_next header_btn" />
						</a>
					</div>
					{(windowWidth < 1024) ? <HeaderControls /> : ''}
				</div>
			)}
			<div className="header_nav_w_list">
				<HeaderMenuList
					menuItems={menuItems}
				/>
			</div>
		</nav>
	);
};

export default HeaderMenu;
