import ImgEvent from 'i/event_1.jpg';

export const EVENT_ARRAY = {
	heroArray: {
		title: 'Sample Conference',
		subTitle: 'Conference, Life Event',
		img: ImgEvent,
		dateList: ['Mon, Dec 7, 12:00 p.m. — 4:00 p.m.', 'Tue, Dec 8, 12:00 p.m. — 4:00 p.m.', 'Wed, Dec 9, 12:00 p.m. — 4:00 p.m.'],
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
	eventInfoTextArray: ['Extractivism is one the main causes of dispossession, exploitation, and even genocide and ecocide of the First Nations of colonized countries. El robo (theft) addresses this issue as seen through the lens of the Brazilian artist María Thereza Alves and scholar Denise Ferreira da Silva. Alves, who has devised an aesthetic research practice that “attempts to document as active agents those who are critically engaged with history,” has a longstanding commitment to the community of Mexico’s Xico Valley.', 'Prevented from ecologically sustaining themselves, the Xico community’s struggle was first staged by Alves in a multimedia installation titled The Return of the Lake (2012), in which the artist elaborated upon a critique of the notion of “post-colonization” by investigating how colonial practices are still very much in place.', 'Ferreira da Silva has written extensively on the ethical questions of the global present, and most recently she has begun experimenting with how to release the world from “the procedures and tools that presume that everything that exists or happens is an expression of the human.” Her poethical experiments with the elemental expose how colonial and racial violence is “vital to the accumulation of capital in its various (merchant, industrial and financial) moments.”', 'By pointing to the objectification of personhood that leads to ecocrimes, Alves and Ferreira da Silva share a theorizing of racial power and a politico extractivist model that oppresses the Indigenous, Black, and impoverished communities of the Americas.', '<strong>Speakers</strong>', '<strong>Maria Thereza Alves</strong> is a Brazil-born artist, a cofounder of the Green Party of São Paulo, and a former member of the International Indian Treaty Council.', '<strong>Denise Ferreira da Silva</strong> is a Brazilian professor and director of the Social Justice Institute-GRSJ at the University of British Columbia, Canada.', '<strong>Moderator</strong>', '<strong>Camila Marambio</strong> is the founder and artistic director of the collective research practice Ensayos. She has a PhD in curatorial practice from Monash University, Australia, an MA in modern art from Columbia University, and a Master of Experiments in Arts and Politics from Sciences Po, Paris.'],
	eventInfoBottomArray: {
		btnUrl: '#',
		btnTitle: 'REGISTER',
		text: ['Space is limited, and reservations are required. Please contact <a href="mailto:ambistrovic@lbi.cjh.org">ambistrovic@lbi.cjh.org</a> or call <a href="tel:4903050014165">+49 (0) 30 500 14 165</a> to learn more or register.'],
	},
	navBlockArray: [
		{
			row: [
				{
					title: 'Back to Events',
					url: '#',
				},
			],
		},
		{
			row: [
				{
					title: 'Previous Event',
					url: '#',
				},
				{
					nextArrow: true,
					title: 'Next Event',
					url: '#',
				},
			],
		},
	],
};

export const NAV_ITEMS = [
	{
		url: '/events',
		title: {
			en: 'Back to Events',
			de: 'Back to Events',
		},
	},
	{
		url: '/event/',
		title: {
			en: 'Previous Event',
			de: 'Previous Event',
		},
	},
	{
		url: '/event/',
		title: {
			en: 'Next Event',
			de: 'Next Event',
		},
	},
];
