import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';

const PopupPlease = ({ isOpen }) => {
	const { langApp, showPopupByKey } = useContext(JsonDataContext);

	const handleClosePopup = () => {
		showPopupByKey();
	};

	return (
		<CSSTransition
			in={isOpen}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames="popup"
			mountOnEnter
			unmountOnExit
		>
			<div className="popup popupPlease">
				<div className="overlay" />
				<div className="popup_in v2_mod">
					<button className="popup_close" type="button" onClick={handleClosePopup}>
						<IconClose className="icon icon-close_2 size_mod" />
					</button>
					<div className="popup_content v2_mod">
						<div className="section_title size_v2_mod color_mod offset_v2_mod">{APP_DATA.PopupPlease.text[langApp]}</div>
						<a className="btn_v2 full_btn" href={APP_DATA.PopupPlease.btnUrl} onClick={handleClosePopup}>{APP_DATA.PopupPlease.btnTitle[langApp]}</a>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default PopupPlease;
