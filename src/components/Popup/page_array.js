import Img1 from 'i/essay.jpg';
import Img2 from 'i/panel.jpg';

export const POPUP_ARRAY = {
	welcome: {
		title: 'Thank you for joining us at SHP',
		subtitle: 'Your subscription gives you access to all features on this site:',
		list: [
			'Create your own list of objects and essays for quick access',
			'Download all reading material',
			'Receive updates for upcoming objects, new reading material, and future events',
		],
		text: 'Remember to mark <a href="mailto:news@shp.com">news@shp.com</a> as “safe sender” in your email provider, so you get all the updates we’ll be sending you.',
		button: 'continue',
	},
	calendar: {
		list: [
			'Google Calendar',
			'iCal',
			'Outlook Calendar',
		],
	},
	slider: {
		slides: [
			{
				head: 'Object 001',
				icon: 'heart',
				menu: [
					{
						url: '#',
						title: 'View Object',
					},
					{
						url: '#',
						title: 'View in Map',
					},
					{
						url: '#',
						title: 'View in Virtual Exhibit',
					},
				],
				img: Img1,
				title: 'Simson “Schwalbe” KR 51 Moped',
				text: 'The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.',
				table: [
					{
						id: 1,
						iconMod: 'origin_mod',
						title: '<span>Origin</span>Suhl, Thüringia',
						url: '#',
					},
					{
						id: 2,
						iconMod: 'date_mod',
						title: '<span>Date</span>1964',
						url: '#',
					},
					{
						id: 3,
						iconMod: 'essays_mod',
						title: '<span>Essays</span>By David Brown, Leo Back Institute',
						url: '#',
					},
				],
			},
			{
				title: 'Constantine The Great reigns as Roman Emperor',
				img: Img2,
				imgMod: 'lg_mod',
				text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
			},
			{
				head: 'Object 001',
				title: 'Simson “Schwalbe” KR 51 Moped',
				menu: [
					{
						url: '#',
						title: 'View Object',
					},
					{
						url: '#',
						title: 'View in Map',
					},
					{
						url: '#',
						title: 'View in Virtual Exhibit',
					},
				],
				img: Img1,
				dateDescr: 'Release Date',
				date: 'Tuesday Feb. 27, 2021',
				text: 'Subscribe to our newsletter for releasing dates for this object and more to come.',
				btn: 'SUBSCRIBE',
			},
		],
	},
};
