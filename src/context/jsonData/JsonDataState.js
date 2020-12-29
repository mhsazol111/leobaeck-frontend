import React, { useEffect, useState } from 'react';
import detectBrowserLanguage from 'detect-browser-language';

import { getAppBaseData, getAllPages, getFilters } from 'api/data';
import {
	setItemToLocalStorage,
	getItemFromLocalStorage,
	setCookie,
	getCookie,
} from 'utils';
import { getAllObjects } from 'api/object';
import APP_DATA from 'utils/jsonAppData';
import JsonDataContext from './jsonDataContext';
import { GERMAN_LANG, ENGLISH_LANG } from './constant';

const COOKIE_EXPIRES_TIME = 86400;

const JsonDataState = ({ children }) => {
	const [pagesData, setPagesData] = useState(null);
	const [allEvents, setAllEvents] = useState(null);
	const [allObjects, setAllObjects] = useState([]);
	const [allFilteredObjects, setAllFilteredObjects] = useState([]);
	const [appBaseData, setAppBaseData] = useState(null);
	const [filtersData, setFiltersData] = useState(null);
	const [langApp, setLangApp] = useState('en');
	const [globalSearchQuery, setGlobalSearchQuery] = useState('');
	const [weekObject, setWeekObject] = useState(APP_DATA.homePage.weekObjectSection);
	const [upcomingObjects, setUpcomingObjects] = useState(false);
	const [epochsPageData, setEpochsPageData] = useState(null);
	const [objectPopupData, setObjectPopupData] = useState(false);
	const [googleCalendarLink, setGoogleCalendarLink] = useState(false);
	const [allEssayData, setAllEssayData] = useState(false);
	const [isLandingPopupVisible, setLandingPopupVisible] = useState(false);
	const [appPopups, setAppPopups] = useState({
		object: {
			isOpen: false,
		},
		timeline: {
			isOpen: false,
		},
		virtualExhibit: {
			isOpen: false,
		},
		cookies: {
			isOpen: false,
		},
		signUp: {
			isOpen: false,
		},
		logIn: {
			isOpen: false,
		},
		welcome: {
			isOpen: false,
		},
		calendar: {
			isOpen: false,
		},
	});

	// cookies id and their state: name & checked property
	const [appCookies, setAppCookies] = useState({
		necessaryCookies: {
			name: 'necessary',
			value: 'some necessary value',
			checked: false,
		},
		functionalCookies: {
			name: 'functional',
			value: 'some functional value',
			checked: false,
		},
		performanceCookies: {
			name: 'performance',
			value: 'some performance value',
			checked: false,
		},
	});
	const [isSetCookies, setIsSetCookies] = useState(false);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const fetchAppBaseData = async () => {
		try {
			const res = await getAppBaseData();

			return res.data;
		} catch (err) {
			console.error(err);
		}

		return null;
	};

	const getAllPagesData = async () => {
		try {
			const res = await getAllPages();

			return res.data;
		} catch (err) {
			console.error(err);
		}

		return null;
	};

	const fetchFilters = async () => {
		try {
			const res = await getFilters();

			return res.data;
		} catch (err) {
			console.error(err);
		}

		return null;
	};

	const getAllAppData = async () => {
		const resAllPagesData = await getAllPagesData();
		const resAppBaseData = await fetchAppBaseData();
		const resFiltersData = await fetchFilters();

		setFiltersData(resFiltersData);
		setAppBaseData(resAppBaseData.acf);
		setPagesData(resAllPagesData);
	};

	const languageDetection = () => {
		const userLocalStorageLang = getItemFromLocalStorage('user-language');

		if (userLocalStorageLang) {
			setLangApp(userLocalStorageLang);

			return false;
		}

		const userBrowserLanguage = detectBrowserLanguage();
		let preparedLangApp;

		if (userBrowserLanguage.includes('de')) {
			preparedLangApp = GERMAN_LANG;
			setLangApp(GERMAN_LANG);
		} else {
			preparedLangApp = ENGLISH_LANG;
			setLangApp(ENGLISH_LANG);
		}

		setItemToLocalStorage('user-language', preparedLangApp);

		return null;
	};

	const getWeekAndUpcomingObjects = data => {
		let preparedWeekObject = null;
		const preparedUpcomingObject = [];

		for (let index = 0; index < data.length; index += 1) {
			const { status } = data[index];
			if (status === 'publish') {
				preparedWeekObject = data[index];
			}
			if (status === 'future') {
				if (preparedUpcomingObject.length > 1) break;
				preparedUpcomingObject.push(data[index]);
			}
		}

		setWeekObject(preparedWeekObject);
		setUpcomingObjects(preparedUpcomingObject);

		return null;
	};

	const fetchAllObjects = async () => {
		try {
			const res = await getAllObjects();

			getWeekAndUpcomingObjects(res.data);
		} catch (err) {
			console.error(err);
		}

		return null;
	};

	const showPopupByKey = popupKey => {
		const updatedAppPopups = { ...appPopups };

		Object.keys(updatedAppPopups).forEach(key => {
			const keyObj = updatedAppPopups[key];
			if (popupKey && key.toLowerCase() === popupKey.toLowerCase()) {
				keyObj.isOpen = !keyObj.isOpen;
			} else {
				keyObj.isOpen = false;
			}
		});

		setAppPopups(updatedAppPopups);
	};

	const hideLandingPopup = () => {
		setItemToLocalStorage('skipLandingPopup', false);
		setLandingPopupVisible(false);
	};

	const checkLandingPopupState = () => {
		const landingPopupState = getItemFromLocalStorage('skipLandingPopup');

		if (landingPopupState) {
			setLandingPopupVisible(false);
		} else {
			setLandingPopupVisible(true);
		}
	};

	const checkUserCookie = () => {
		const copiedAppCookies = { ...appCookies };
		let isUserCookieExist = false;

		Object.keys(copiedAppCookies).forEach(key => {
			const cookieItem = copiedAppCookies[key];
			const cookieValue = getCookie(cookieItem.name);
			// isUserCookieExist = !!(!isUserCookieExist && cookieValue);
			if (cookieValue && !isUserCookieExist) {
				isUserCookieExist = true;
			}
			copiedAppCookies[key].checked = !!cookieValue;
		});

		setAppCookies(copiedAppCookies);
		setIsSetCookies(isUserCookieExist);
	};

	const addCookies = cookiesData => {
		const preparedCookiesData = { ...cookiesData };
		Object.keys(preparedCookiesData).forEach(key => {
			const cookieItem = preparedCookiesData[key];
			if (cookieItem.checked === true) {
				setCookie(cookieItem.name, JSON.stringify(cookieItem.value), { expires: COOKIE_EXPIRES_TIME });
			}
		});

		setIsSetCookies(true);
	};

	useEffect(() => {
		getAllAppData();
		fetchAllObjects();
		languageDetection();
	}, []);

	useEffect(() => {
		checkUserCookie();
		checkLandingPopupState();
	}, []);

	return (
		<JsonDataContext.Provider
			value={{
				appBaseData,
				langApp,
				setLangApp,
				globalSearchQuery,
				setGlobalSearchQuery,
				pagesData,
				setPagesData,
				allEvents,
				setAllEvents,
				allFilteredObjects,
				setAllFilteredObjects,
				allObjects,
				setAllObjects,
				filtersData,
				setFiltersData,
				fetchAllObjects,
				weekObject,
				setWeekObject,
				upcomingObjects,
				setUpcomingObjects,
				appPopups,
				setAppPopups,
				showPopupByKey,
				objectPopupData,
				setObjectPopupData,
				isSetCookies,
				setIsSetCookies,
				epochsPageData,
				setEpochsPageData,
				googleCalendarLink,
				setGoogleCalendarLink,
				allEssayData,
				setAllEssayData,
				mobileMenuOpen,
				setMobileMenuOpen,
				appCookies,
				setAppCookies,
				addCookies,
				isLandingPopupVisible,
				setLandingPopupVisible,
				hideLandingPopup,
			}}
		>
			{children}
		</JsonDataContext.Provider>
	);
};

export default JsonDataState;
