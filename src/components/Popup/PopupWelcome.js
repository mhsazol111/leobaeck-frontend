import React, { useContext, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactHtmlParser from 'react-html-parser';
import { JsonDataContext } from 'context/jsonData';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';
import { UiContext } from 'context/ui';
import { AuthContext } from 'context/auth';
import { markWelcomePopupViewed } from 'api/user';

// content
import APP_DATA from 'utils/jsonAppData';
import { POPUP_ARRAY } from './page_array';

const PopupLogin = () => {
	const {
		uiState: { openedPopupId },
		closePopups,
	} = useContext(UiContext);
	const {
		currentUser,
		setCurrentUser,
	} = useContext(AuthContext);
	const { langApp } = useContext(JsonDataContext);

	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		setShowPopup((openedPopupId === 'welcome'));
	}, [
		openedPopupId,
		setShowPopup,
	]);

	useEffect(() => {
		async function fn() {
			if (showPopup && !currentUser.welcomePopupShown) {
				const markWelcomePopupViewedResponse = await markWelcomePopupViewed();
				if (markWelcomePopupViewedResponse.status === 'SUCCESS') {
					setCurrentUser({
						...currentUser,
						welcomePopupShown: true,
					});
				}
			}
		}
		fn();
	}, [
		showPopup,
		currentUser,
		setCurrentUser,
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
			<div className="popup popupWelcome">
				<div className="overlay" />
				<div className="popup_in">
					<button className="popup_close" type="button" onClick={() => closePopups()}>
						<IconClose className="icon icon-close_2 size_mod" />
					</button>
					<div className="popup_content">
						<h2 className="section_title offset_v2_mod color_mod size_v2_mod">{APP_DATA.PopupWelcome.title[langApp]}</h2>
						<div className="popup_text">{APP_DATA.PopupWelcome.subtitle[langApp]}</div>
						<ul className="popup_list">
							{APP_DATA.PopupWelcome.list[langApp].map((item) => {
								return <li className="popup_list_item">{item}</li>;
							})}
						</ul>
						<div className="popup_bottom">
							<div className="popup_text offset_mod">{ ReactHtmlParser(APP_DATA.PopupWelcome.text[langApp]) }</div>
							<div className="btn_wrap">
								<a
									className="btn_v2"
									href="#"
									onClick={e => {
										e.preventDefault();
										closePopups();
									}}
								>
									{APP_DATA.PopupWelcome.button[langApp]}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default PopupLogin;
