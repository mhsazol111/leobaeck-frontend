import { api } from 'utils/api';

const getAllEvents = async () => {
	const events = await api.get('/wp/v2/future-events');

	return events;
};

const getSingleEvent = async id => {
	const events = await api.get(`/wp/v2/future-events?${id}`);

	return events;
};

export {
	getAllEvents,
	getSingleEvent,
};
