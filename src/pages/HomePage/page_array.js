import HeroImg from 'i/hero.jpg';
import VisitImg from 'i/img2.jpg';
import weekObjectImg from 'i/object/moped_2.jpg';
import PreviewItemImg from 'i/object/moped.jpg';
import infoBlockImg from 'i/img3.jpg';

export const HOME_ARRAY = {
	heroSliderArray: [
		{
			title: '1700 Years of Jewish Life in German-speaking Lands',
			descr: '<p>2021 marks the 1700th anniversary of a Constantinian edict, the earliest evidence of a Jewish community in the German-speaking world.</p>',
			btnTitle: 'Learn More',
			image: HeroImg,
		},
		{
			title: '1700 Years of Jewish Life in German-speaking Lands',
			descr: '<p>2021 marks the 1700th anniversary of a Constantinian edict, the earliest evidence of a Jewish community in the German-speaking world.</p>',
			btnTitle: 'Learn More',
			image: HeroImg,
		},
	],
	heroProjectContent: {
		text: '<p>The Shared History Project presents 58 objects pertaining to the German Jewish history in the German-speaking territories across the centuries.</p>',
		title: 'New objects will be revealed throughout 2021, Each Sunday, one new object will appear on the website. ',
	},
	exploreBlockArray: {
		title: 'Explore our Objects',
		items: [
			{
				url: '/objects-list',
				title: 'By <br> Item',
			},
			{
				url: '/timeline',
				title: 'By <br> TIMELINE',
			},
			{
				url: '/map',
				title: 'By <br> LOCATION',
			},
		],
	},
	visitBlockArray: {
		title: 'or visit the Virtual Exhibit',
		url: '#',
		btnTitle: 'Enter',
		img: VisitImg,
	},
	weekObjectArray: {
		title: 'This Week’s Object',
		modelNumber: 'Item 001',
		modelTitle: 'Simson “Schwalbe” KR 51',
		text: ['The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.'],
		items: [
			{
				iconMod: 'origin_mod',
				title: '<span>Origin</span>Suhl, Thüringia',
				url: '#',
			},
			{
				iconMod: 'date_mod',
				title: '<span>Date</span>1964',
				url: '#',
			},
			{
				iconMod: 'essays_mod',
				title: '<span>Essays</span>By David Brown, Leo Back Institute',
				url: '#',
			},
		],
		btnUrl: '#',
		btnTitle: 'View object',
		img: weekObjectImg,
	},
	upcomingObjectsArray: {
		title: 'Upcoming Objects',
		previewItemsArray: {
			emptyText: 'To be published Feb. 23',
			items: [
				{
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					img: PreviewItemImg,
					title: 'Simson “Schwalbe” KR 51 Moped',
				},
				{
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					img: PreviewItemImg,
					title: 'Simson “Schwalbe” KR 51 Moped',
				},
			],
		},
		btnUrl: '#',
		btnTitle: 'Object list',
	},
	bannerArray: {
		title: 'Discover all the features, while staying up-to-date with the latest news',
		text: '<p>In the world full of information and busy moments, we encourage you to sign up to our website.</p><p>This will give you access to our weekly newsletter and an option to download the materials to read them later or use them as an educational support.</p>',
		btnUrl: '#',
		btnTitle: 'Sign up',
	},
	upcomingEvent: {
		title: 'Upcoming Event',
		subtitle: 'Conference Name',
		text: ['The Leo Baeck Institute – New York | Berlin is a research library and archive', 'Berlin, Germany', 'December 7—8—9, 2020'],
		btnUrl: '#',
		btnTitle: 'View event',
	},
	infoBlockArray: {
		headTitle: 'Those behind the<br> Shared History<br> Project',
		title: 'The Shared History Project is possible by The Leo Baeck Institute',
		text: ['Leo Baeck Institute – New York | Berlin (LBI) in cooperation with the Federal Agency for Civic Education (Bundeszentrale für politische Bildung/bpb) and co-sponsored by the German Foreign Office is pleased to present the Shared History Project.'],
		btnUrl: '#',
		btnTitle: 'Learn more',
		img: infoBlockImg,
	},
	infoBlockBottomArray: {
		title: 'Meet our collaborators',
		text: ['The Shared History Project wouldn’t be possible without the help of key collaborators and the research of many sources.'],
		btnUrl: '/credits',
		btnTitle: 'Learn more',
	},
	listBlockArray: {
		title: 'For additional information<br> feel free to reach out',
		items: [
			{
				cols: [
					{
						title: 'New York',
					},
					{
						descr: '<p>15 W 16th St</p><p>New York, NY 10011</p>',
					},
					{
						links: [
							{
								linkUrl: 'tel:+1(212)7446400',
								linkTitle: '+1 (212) 744 6400',
							},
							{
								linkUrl: 'tel:+1 (212)294-8340',
								linkTitle: '+1 (212) 294-8340',
							},
						],
					},
					{
						links: [
							{
								linkUrl: 'mailto:info@lbi.org',
								linkTitle: 'info@lbi.org',
							},
						],
					},
				],
			},
			{
				cols: [
					{
						title: 'Berlin',
					},
					{
						descr: '<p>Glinkastraße 3210117</p><p>Berlin, Germany</p>',
					},
					{
						links: [
							{
								linkUrl: 'tel:+49(0)3050014165',
								linkTitle: '+49 (0) 30 500 14 165',
							},
							{
								linkUrl: 'tel:+1(212)294-8340',
								linkTitle: '+1 (212) 294-8340',
							},
						],
					},
					{
						links: [
							{
								linkUrl: 'mailto:mbistrovic@lbi.cjh.org',
								linkTitle: 'mbistrovic@lbi.cjh.org',
							},
						],
					},
				],
			},
		],
	},
};
