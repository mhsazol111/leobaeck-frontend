import { api } from 'utils/api';
import Session from 'utils/Session';

const signup = async (userObj) => {
	const res = await api.post('/wp/v2/user/signup', userObj);

	return res.data;
};

const login = async (userObj) => {
	const res = await api.post('/jwt-auth/v1/token', {
		username: userObj.email,
		password: userObj.password,
	});

	return res.data;
};

const forgotPassword = async (userObj) => {
	const res = await api.post('/wp/v2/user/forgot-password', {
		email: userObj.email,
	});

	return res.data;
};

const resetPassword = async (userObj) => {
	const res = await api.post('/wp/v2/user/reset-password', {
		resetToken: userObj.resetToken,
		newPassword: userObj.newPassword,
		repeatNewPassword: userObj.repeatNewPassword,
	});

	return res.data;
};

const updateCurrentUser = async userObj => {
	const token = (Session.getSession()).getToken();

	if (token === false) {
		// eslint-disable-next-line
		window.alert('Please log in to continue!');
		return false;
	}

	const res = await api.post('/wp/v2/user/profile', userObj, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return res.data;
};

const fetchCurrentUser = async () => {
	const token = (Session.getSession()).getToken();

	if (token === false) {
		// eslint-disable-next-line
		window.alert('Please log in to continue!');
		return false;
	}

	const res = await api.get('/wp/v2/user/profile', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return res.data;
};

const markWelcomePopupViewed = async () => {
	const token = (Session.getSession()).getToken();

	if (token === false) {
		// eslint-disable-next-line
		window.alert('Please log in to continue!');
		return false;
	}

	const res = await api.get('/wp/v2/user/welcomPopupViewed', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return res.data;
};

const fetchCurrentUserCollections = async () => {
	const token = (Session.getSession()).getToken();

	if (token === false) {
		// eslint-disable-next-line
		window.alert('Please log in to continue!');
		return false;
	}

	const res = await api.get('/wp/v2/user/fetchCollections', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return res.data;
};

export {
	signup,
	login,
	fetchCurrentUser,
	updateCurrentUser,
	markWelcomePopupViewed,
	fetchCurrentUserCollections,
	forgotPassword,
	resetPassword,
};
