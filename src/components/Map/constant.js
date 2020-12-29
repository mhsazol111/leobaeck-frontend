export const MAP_API_KEY = 'AIzaSyBrZNofhuwJ2QPvOjleVt53ytuDRrap5KM';
// export const MAP_API_KEY = 'AIzaSyA2RrI90LrFWTpWswFnV2A_uOOGMiNT5DA';

export const MAP_DEFAULT_CENTER = { lat: 50.473327, lng: 9.190497 };

export const LOCATIONS = [
	{
		lat: 40, lng: 10, id: 1, text: 'its map marker #1',
	},
	{
		lat: 40, lng: 10.2, id: 2, text: 'its map marker #1111',
	},
	{
		lat: 50, lng: 5, id: 3, text: 'its map marker #2 its map marker #2',
	},
	{
		lat: 42, lng: 0, id: 4, text: 'its map marker #3',
	},
	{
		lat: 45, lng: 20, id: 5, text: 'its map marker #4',
	},
	{
		lat: 42.3, lng: 0, id: 6, text: 'its map marker #5',
	},
	{
		lat: 42.5, lng: 0, id: 7, text: 'its map marker #6',
	},
	{
		lat: 42.4, lng: 0, id: 8, text: 'its map marker #7',
	},
	{
		lat: 42.6, lng: 0, id: 9, text: 'its map marker #8',
	},
	{
		lat: 42.8, lng: 0, id: 10, text: 'hello hello hello hello hello hello hello',
	},
];

export const MAP_STYLES = [
	{
		featureType: 'administrative',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'administrative.country',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#0038b9',
			},
		],
	},
	{
		featureType: 'administrative.province',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'geometry.fill',
		stylers: [
			{
				visibility: 'on',
			},
			{
				color: '#ededed',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'landscape.man_made',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'landscape.natural.terrain',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#ededed',
			},
		],
	},
	{
		featureType: 'landscape.natural.terrain',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#6b3434',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		elementType: 'labels.text',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry.stroke',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'transit',
		elementType: 'all',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#f5f5f5',
			},
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.stroke',
		stylers: [
			{
				color: '#000000',
			},
			{
				visibility: 'on',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
];
