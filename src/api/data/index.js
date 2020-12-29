import { api } from 'utils/api';

const getMainMenuItems = async () => {
	const menuItems = await api.get('/nav/main-menu');

	return menuItems;
};

const getFooterMenuItems = async () => {
	const menuItems = await api.get('/nav/footer-menu');

	return menuItems;
};

const getAllPages = async () => {
	const allPages = await api.get('/wp/v2/pages?per_page=100');

	return allPages;
};

const getAppBaseData = async () => {
	const appBaseData = await api.get('/acf/v3/options/options');

	return appBaseData;
};

const getAllEssay = async () => {
	const res = await api.get('/wp/v2/essay?&per_page=100');

	return res;
};

const getSingleEssay = async id => {
	const res = await api.get(`/wp/v2/essay/${id}`);

	return res;
};

const getTimelinePageData = async () => {
	const res = await api.get('/wp/v2/timeline');

	return res;
};

const getFilters = async () => {
	const res = await api.get('/wp/v2/filters');

	return res;
};

const getMapData = async () => {
	const res = await api.get('/wp/v2/map/');

	return res;
};

export {
	getMainMenuItems,
	getFooterMenuItems,
	getAllPages,
	getAppBaseData,
	getTimelinePageData,
	getAllEssay,
	getSingleEssay,
	getFilters,
	getMapData,
};
