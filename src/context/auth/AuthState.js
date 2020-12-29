import React, { useState, useEffect } from 'react';
import { setItemToLocalStorage, getItemFromLocalStorage } from 'utils';
import Session from 'utils/Session';
import AuthContext from './AuthContext';

const fetchCurrentUserFromLocalStorage = () => {
	const currentUserLocalStorage = getItemFromLocalStorage('_crntUsr');
	if (!currentUserLocalStorage || typeof currentUserLocalStorage === 'undefined' || currentUserLocalStorage === '{}') {
		return null;
	}
	return JSON.parse(currentUserLocalStorage);
};

const fetchloggedInFromSession = () => {
	return (Session.getSession()).isLoggedIn();
};

const AuthState = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(fetchloggedInFromSession());
	const [currentUser, setCurrentUser] = useState(fetchCurrentUserFromLocalStorage());

	useEffect(() => {
		setItemToLocalStorage('_crntUsr', JSON.stringify(currentUser));
	}, [
		currentUser,
	]);

	return (
		<AuthContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				currentUser,
				setCurrentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthState;
