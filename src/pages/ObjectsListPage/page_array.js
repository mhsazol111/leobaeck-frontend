import HeroImg from 'i/moped_yell.jpg';
import MopedImg from 'i/object/moped.jpg';

export const OBJECT_LIST_PAGE_ARRAY = {
	heroSectionArray: {
		heroTitle: {
			en: 'This Week’s Object',
			de: 'Das Objekt dieser Woche',
		},
		model: 'Object 001',
		title: 'Simson “Schwalbe” KR 51 Moped',
		descr: ['The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.'],
		btnUrl: '#',
		btnTitle: 'View Object',
		img: HeroImg,
	},
	collectionArray: {
		title: {
			en: 'The Collection',
			de: 'Die Sammlung',

		},
		filterList: [
			{
				title: 'By Time Period',
				options: [
					{
						title: 'Business',
						type: 'time_period',
					},
					{
						title: 'Option 2',
						type: 'time_period',
					},
					{
						title: 'Option 3',
						type: 'time_period',
					},
				],
			},
			{
				title: 'By Historical Event',
				options: [
					{
						title: 'Restitution',
						type: 'historical_event',
					},
					{
						title: 'Option 2',
						type: 'historical_event',
					},
					{
						title: 'Option 3',
						type: 'historical_event',
					},
				],
			},
			{
				title: 'By Object Type',
				options: [
					{
						title: 'Expropriation',
						type: 'object_type',
					},
					{
						title: 'Option 2',
						type: 'object_type',
					},
					{
						title: 'Option 3',
						type: 'object_type',
					},
				],
			},
			{
				title: 'By Location',
				options: [
					{
						title: 'German Democratic Republic',
						type: 'location',
					},
					{
						title: 'Option 2',
						type: 'location',
					},
					{
						title: 'Option 3',
						type: 'location',
					},
				],
			},
			{
				title: 'By Tag',
				options: [
					{
						title: 'Business',
						id: 16,
						type: 'tag',
					},
					{
						id: 15,
						title: 'Expropriation',
						type: 'tag',
					},
					{
						id: 18,
						title: 'German Democratic Republic',
						type: 'tag',
					},
					{
						id: 17,
						title: 'Restitution',
						type: 'tag',
					},
				],
			},
		],
		collectionHeadTitle: 'Late Roman Empire to the Middle Ages',
		collectionHeadDescr: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
		collectionHeadBtnUrl: '#',
		collectionHeadBtnTitle: 'Read ESSAY',
		previewItemsArray: {
			emptyText: 'To be published Feb. 23',
			items: [
				{
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					img: MopedImg,
					title: 'Simson “Schwalbe” KR 51 Moped',
					itemInfoList: [
						{
							subTitle: 'Origin',
							title: 'Suhl, Thüringia',
							url: '#',
						},
						{
							subTitle: 'Date',
							title: '1964',
							url: '#',
						},
						{
							subTitle: 'Essays',
							title: 'By David Brown',
							url: '#',
						},
					],
				},
				{
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					img: MopedImg,
					title: 'Simson “Schwalbe” KR 51 Moped',
				},
				{
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					img: MopedImg,
					title: 'Simson “Schwalbe” KR 51 Moped',
					itemInfoList: [
						{
							subTitle: 'Origin',
							title: 'Suhl, Thüringia',
							url: '#',
						},
						{
							subTitle: 'Date',
							title: '1964',
							url: '#',
						},
						{
							subTitle: 'Essays',
							title: 'By David Brown',
							url: '#',
						},
					],
				},
			],
		},
		moreBtnUrl: '#',
		moreBtnTitle: 'Load more',
	},
	bannerArray: {
		title: 'Stay up-to-date every week. New objects will be revealed throughout 2021.',
		text: '<p>Subscribe to our bulletin for news on upcoming objects every week, additional essays, early access to events, and more.</p>',
		btnUrl: '#',
		btnTitle: 'Sign up',
		bottomDescr: 'Or <a href="#">Sign Up</a> for additional access to all features.',
	},
	exploreBlockArray: {
		title: 'Explore other Views',
		items: [
			{
				url: '/timeline',
				title: {
					en: 'By <br> TIMELINE',
					de: 'Mit der <br> Zeitleiste',
				},
			},
			{
				url: '/map',
				title: {
					en: 'By <br> LOCATION',
					de: 'Nach <br> STANDORT',
				},
			},
		],
	},
	exploreBlockArrayObjectPage: {
		en: 'Explore other Views',
		de: 'Erkunden Sie andere Darstellungen',
	},
};
