import React from 'react';

// content
import APP_DATA from 'utils/jsonAppData';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';
import PopupItem from './PopupItem';

const popupSlider2 = () => {
	const closePopupFunc = () => {
		document.querySelector('.popupSlider2').classList.remove('active_mod');
	};

	return (
		<div className="popup side_mod popupSlider2">
			<div className="overlay" />
			<div className="popup_in side_mod">
				<button className="popup_close v2_mod" type="button" onClick={closePopupFunc}>
					<IconClose className="icon icon-close_2 size_mod" />
				</button>
				<div className="popup_content">
					<div className="panel_slider">
						<PopupItem content={APP_DATA.popupHistory} />
					</div>
				</div>
			</div>
		</div>

	);
};

export default popupSlider2;
