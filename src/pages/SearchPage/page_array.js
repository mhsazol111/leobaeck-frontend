import { ReactComponent as IconDoc } from 'i/icons/document_2.svg';
import { ReactComponent as IconCamera } from 'i/icons/camera.svg';
import { ReactComponent as IconSound } from 'i/icons/sound.svg';

export const SEARCH_ARRAY = {
	searchPlaceholder: 'Search',
	searchButton: 'Search',
	filterBlockArray: {
		searchBtnTitle: 'Filter your search',
		filterList: [
			{
				searchBtnTitle: 'Filter your search',
			},
			{
				title: 'By Time Period',
				optionsArray: ['Option 1', 'Option 2', 'Option 3'],
			},
			{
				title: 'By Historical Event',
				optionsArray: ['Option 1', 'Option 2', 'Option 3'],
			},
			{
				title: 'By Object Type',
				optionsArray: ['Option 1', 'Option 2', 'Option 3'],
			},
			{
				title: 'By Location',
				optionsArray: ['Option 1', 'Option 2', 'Option 3'],
			},
			{
				title: 'By Tag',
				optionsArray: ['Option 1', 'Option 2', 'Option 3'],
			},
			{
				clearBtnTitle: 'Clear All Filters',
			},
		],
	},
	results: [
		{
			Icon: IconDoc,
			title: 'Simson “Schwalbe” KR 51 Moped',
			text: 'The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.',
		},
		{
			Icon: IconCamera,
			title: 'Simson “Schwalbe” KR 51 Moped',
			text: 'The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.',
		},
		{
			Icon: IconSound,
			title: 'Simson “Schwalbe” KR 51 Moped',
			text: 'The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.',
		},
	],
	resultsButton: 'LOAD MORE',
};
