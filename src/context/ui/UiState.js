import React, { useState } from 'react';

import UiContext from './UiContext';

const AuthState = ({ children }) => {
	const [uiState, setUiState] = useState({
		openedPopupId: null,
		navProfileMenuOpen: false,
		redirectAfterLogin: null,
	});

	const openPopup = (popupId, pathName = null) => {
		setUiState({
			...uiState,
			openedPopupId: popupId,
			redirectAfterLogin: pathName,
		});
	};

	const closePopups = () => {
		setUiState({
			...uiState,
			openedPopupId: null,
			redirectAfterLogin: null,
		});
	};

	const toggleNavProfileMenu = action => {
		setUiState({
			...uiState,
			navProfileMenuOpen: action,
		});
	};

	return (
		<UiContext.Provider
			value={{
				uiState,
				openPopup,
				closePopups,
				toggleNavProfileMenu,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};

export default AuthState;
