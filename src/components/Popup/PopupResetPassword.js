import React, { useContext, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';
import { PopupResetPasswordForm } from 'components/Form';
import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';
import APP_DATA from 'utils/jsonAppData';

const PopupResetPassword = () => {
	const { langApp } = useContext(JsonDataContext);
	const {
		uiState: { openedPopupId },
		closePopups,
	} = useContext(UiContext);

	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		setShowPopup((openedPopupId === 'resetPassword'));
	}, [
		openedPopupId,
		setShowPopup,
	]);

	return (
		<CSSTransition
			in={showPopup}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames="popup"
			mountOnEnter
			unmountOnExit
		>
			<div className="popup popupLogin">
				<div className="overlay" />
				<div className="popup_in v2_mod">
					<button className="popup_close" type="button" onClick={() => closePopups()}>
						<IconClose className="icon icon-close_2 size_mod" />
					</button>
					<div className="popup_content v2_mod">
						<h2 className="section_title offset_v2_mod color_mod size_v2_mod">{APP_DATA.resetPasswordPopup.title[langApp]}</h2>
						<PopupResetPasswordForm />
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default PopupResetPassword;
