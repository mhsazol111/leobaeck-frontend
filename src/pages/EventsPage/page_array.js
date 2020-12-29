import EnentImg from 'i/event_1.jpg';

export const EVENTS_ARRAY = {
	eventListArray: {
		title: 'Events',
		items: [
			{
				date: 'Dec, 7 2020',
				title: 'Sample Conference',
				descr: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam velit, ultrices non fermentum lobortis, vehicula sit amet elit. Ut consequat eros erat, quis venenatis nisl pellentesque quis.'],
				dates: ['December 7,8,9', '12 pm — 4 pm', 'Berlin, Germany'],
				bottomDescr: ['Space is limited, and reservations are required. Please contact mbistrovic@lbi.cjh.org or call +49 (0) 30 500 14 165 to learn more or register.'],
				img: EnentImg,
				buttons: [
					{
						class: 'btn_v4 full_mod',
						url: '#',
						title: 'Add to calendar',
					},
					{
						class: 'btn_v5 full_mod',
						url: '#',
						title: 'REGISTER',
					},
				],
			},
			{
				date: 'Dec, 7 2020',
				title: 'Sample Conference',
				descr: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam velit, ultrices non fermentum lobortis, vehicula sit amet elit. Ut consequat eros erat, quis venenatis nisl pellentesque quis.'],
				dates: ['December 7,8,9', '12 pm — 4 pm', 'Berlin, Germany'],
				bottomDescr: ['Space is limited, and reservations are required. Please contact mbistrovic@lbi.cjh.org or call +49 (0) 30 500 14 165 to learn more or register.'],
				img: EnentImg,
				buttons: [
					{
						class: 'btn_v4 full_mod',
						url: '#',
						title: 'Add to calendar',
					},
					{
						class: 'btn_v5 full_mod',
						url: '#',
						title: 'REGISTER',
					},
				],
			},
		],
	},
	bannerArray: {
		title: 'Stay up-to-date every week. New objects will be revealed throughout 2021.',
		text: '<p>Subscribe to our bulletin for news on upcoming objects every week, additional essays, early access to events, and more.</p>',
		btnUrl: '#',
		btnTitle: 'Sign up',
		bottomDescr: 'Or <a href="#">Sign Up</a> for additional access to all features.',
	},
	eventsContentBlockArray: {
		title: 'About Leo Baeck<br> Institute',
		rowTitle: 'The Leo Baeck Institute New York | Berlin (LBI) is a research collection that has been devoted to the history and culture of German-speaking Jews for 65 years.',
		descrCol1: {
			descr: ['The collection was founded in 1955 by German-Jewish academics and intellectuals out of the bitter experience of the Holocaust, so that it would be available as source material primarily to historians and other scholars for the scholarly study “what was once German Jewry. “ The institute was named after Rabbi Leo Baeck, the last leading representative of the Jewish communities under National Socialism.'],
		},
		descrCol2: {
			btnTitle: 'Visit website',
			btnUrl: '#',
			descr: ['In addition to the Institute in New York, sister institutes were established in London and Jerusalem. What all locations have in common is that the largest German-Jewish immigrant groups were located there after the Second World War.', 'The institutes in London and Jerusalem are mainly devoted to publication activities and the organization of scholarly events, although there is now also a smaller collection in Jerusalem, which is completely recorded in the New York catalogue and is currently being digitized.“', 'In 2001, the New York LBI founded a branch of the archive in Berlin, located at the Jewish Museum there, and since then has called itself the Leo Baeck Institute New York | Berlin.'],
		},
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
