import React, { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';
import { ReactComponent as IconArrow } from 'i/icons/arrow_right.svg';
import { PopupSignUpForm } from 'components/Form';
import APP_DATA from 'utils/jsonAppData';

// content
import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';

const PopupSignup = () => {
	const { langApp } = useContext(JsonDataContext);
	const {
		uiState: { openedPopupId },
		closePopups,
		openPopup,
	} = useContext(UiContext);

	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		setShowPopup((openedPopupId === 'signup'));
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
			<div className="popup popupSignup">
				<div className="overlay" />
				<div className="popup_in">
					<button className="popup_close" type="button" onClick={() => closePopups()}>
						<IconClose className="icon icon-close_2 size_mod" />
					</button>
					<div className="popup_content v3_mod">
						<PopupSignUpForm openLoginPopup={() => openPopup('login')} />
						<div className="popup_bottom">
							<div className="popup_text sm_mod text_mod">{APP_DATA.signupPopup.privacyTitle[langApp]}</div>
							{/* <div className="popup_text sm_mod">{APP_DATA.signupPopup.privacyText[langApp]}</div> */}
							<a className="popup_privacy" href="#">
								{APP_DATA.signupPopup.privacyLink[langApp]}
								<IconArrow className="icon icon-arrow_right link_mod" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default PopupSignup;
