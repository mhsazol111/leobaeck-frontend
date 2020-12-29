import { api } from 'utils/api';
import Session from 'utils/Session';

const getAvailableObjects = async pageNumber => {
	const token = (Session.getSession()).getToken();
	let headers = {};
	if (token !== false) {
		headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
	}
	const preparedPageNumber = pageNumber || 1;
	// const res = await api.get(`/wp/v2/object?per_page=9&page=${preparedPageNumber}`);
	const res = await api.get(`/wp/v2/obj?page=${preparedPageNumber}`, headers);

	return res;
};

const getAllObjects = async pageNumber => {
	// const res = await api.get('/wp/v2/object');
	const res = await api.get('/wp/v2/obj');

	return res;
};

const getSingleObject = async id => {
	const token = (Session.getSession()).getToken();
	let headers = {};
	if (token !== false) {
		headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
	}

	const res = await api.get(`/wp/v2/object/${id}`, headers);

	return res;
};

const getSingleHistoricalObject = async id => {
	const res = await api.get(`/wp/v2/historical/${id}`);

	return res;
};

const getAllFutureObjects = async id => {
	const token = (Session.getSession()).getToken();
	let headers = {};
	if (token !== false) {
		headers = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
	}

	const res = await api.get('/wp/v2/future-objects/', headers);

	return res;
};

const toggleStarred = async id => {
	const token = (Session.getSession()).getToken();
	if (token === false) {
		// eslint-disable-next-line
		window.alert('Please log in to continue!');
		return false;
	}

	const res = await api.get(`/wp/v2/toggleObjectStar?id=${id}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return res.data;
};

export {
	getAvailableObjects,
	getSingleObject,
	getAllObjects,
	getSingleHistoricalObject,
	getAllFutureObjects,
	toggleStarred,
};
