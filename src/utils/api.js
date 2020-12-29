import axios from 'axios';

// export const API_BASE_URL = 'https://leobaeckdevb6.wpengine.com/wp-json';
export const API_BASE_URL = 'http://leobaeck.local/wp-json';

export const api = axios.create({
	baseURL: `${API_BASE_URL}`,
});
