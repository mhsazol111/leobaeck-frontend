import React, { useContext, useState } from 'react';
import { setCookie, getCookie } from 'utils';
import { JsonDataContext } from 'context/jsonData';

const Cookies = () => {
	const COOKIE_EXPIRES_TIME = 86400;
	const fetchConsentCookies = () => {
		const consentCookie = getCookie('cookie_consent');
		return !(typeof consentCookie === 'undefined');
	};

	const [cookieConsent, setCookieConsent] = useState(fetchConsentCookies());
	const {
		showPopupByKey,
	} = useContext(JsonDataContext);

	const setCookies = (e) => {
		e.preventDefault();

		setCookie('cookie_consent', true, { expires: COOKIE_EXPIRES_TIME });
		setCookieConsent(true);
	};

	const handleOpenPopup = () => {
		showPopupByKey('cookies');
	};

	if (cookieConsent) {
		return null;
	}

	return (
		<div className="cookies cookiesBar">
			<div className="section_in flex_mod">
				<div className="cookies_text">
					This website uses cookies to ensure you get the best experience on our site. Please accept cookies for optimal performance.
					&nbsp;
					<a href="#">More info</a>
				</div>
				<div className="btn_wrap offset_side_mod">
					<a className="btn_v7 acceptCookies" href="#" onClick={setCookies}>Yes, I accept</a>
				</div>
				<a className="cookies_link" href="#" onClick={handleOpenPopup}>Change Settings</a>
			</div>
		</div>
	);
};

export default Cookies;
