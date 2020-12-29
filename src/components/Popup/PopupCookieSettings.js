import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';
import { SwitchCheckBox } from 'components/Form';

const PopupCookieSettings = ({ isOpen }) => {
	const {
		langApp,
		showPopupByKey,
		appCookies,
		setAppCookies,
		addCookies,
	} = useContext(JsonDataContext);

	const handleClosePopup = () => {
		showPopupByKey();
	};

	const handleOnSubmit = e => {
		e.preventDefault();

		const copiedCookies = { ...appCookies };
		Array.from(e.target.elements).forEach(input => {
			if (input.type === 'checkbox' && copiedCookies[input.name]) {
				copiedCookies[input.name].checked = input.checked;
			}
		});

		setAppCookies(copiedCookies);
		addCookies(copiedCookies);
		handleClosePopup();
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
			<div className="popup popupCookiesSettings">
				<div className="overlay" />
				<div className="popup_in v3_mod">
					<button className="popup_close" type="button" onClick={handleClosePopup}>
						<IconClose className="icon icon-close_2 size_mod" />
					</button>
					<div className="popup_content v4_mod">
						<div className="section_title size_v2_mod color_mod offset_v2_mod">{APP_DATA.PopupCookieSettings.title[langApp]}</div>
						<form onSubmit={handleOnSubmit}>
							<div className="popup_check_list">
								{APP_DATA.PopupCookieSettings.list.map(({
									id,
									title,
									text,
								}) => {
									const preparedCheckValue = (appCookies[id] !== undefined || appCookies[id] !== null) ? appCookies[id].checked : false;
									return (
										<div className="popup_check_item" key={id}>
											<SwitchCheckBox
												id={id}
												title={title[langApp]}
												name={id}
												defaultChecked={preparedCheckValue}
												v3Mod
											/>
											<div className="popup_check_text">{text[langApp]}</div>
										</div>
									);
								})}
							</div>
							<button
								className="btn_v2"
								type="submit"
							>
								{APP_DATA.PopupCookieSettings.btnTitle[langApp]}
							</button>
						</form>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default PopupCookieSettings;
