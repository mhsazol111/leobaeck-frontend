import { api } from 'utils/api';

// return all exsisting pages, posts and custom post types
const searchByEveryThing = async (searchQuery, pageNumber) => {
	const preparedPageNumber = pageNumber || 1;
	const res = await api.get(`/wp/v2/search?search=${searchQuery}&per_page=3&page=${preparedPageNumber}`);
	// const res = await api.get(`/relevanssi/v1/search?keyword=${searchQuery}`);

	return res;
};

export {
	searchByEveryThing,
};
