import Logo from 'i/logo_white.svg';

import FooterLogo1 from 'i/sponsors/Leo_Baeck_Institute.png';
import FooterLogo2 from 'i/sponsors/bpb.png';
import FooterLogo3 from 'i/sponsors/ffo.png';

export const FOOTER_ARRAY = {
	logoImg: Logo,
	footerNavCols: [
		{
			links: [
				{
					url: '#',
					title: 'About SHP',
				},
				{
					url: '#',
					title: 'Objects',
				},
				{
					url: '#',
					title: 'Eras',
				},
				{
					url: '#',
					title: 'Timeline',
				},
			],
		},
		{
			links: [
				{
					url: '#',
					title: 'Map',
				},
				{
					url: '#',
					title: 'Virtual Museum',
				},
				{
					url: '#',
					title: 'Events',
				},
				{
					url: '#',
					title: 'Credits',
				},
			],
		},
		{
			links: [
				{
					url: '#',
					title: 'Leo Baeck Institute – New York | Berlin (LBI)',
				},
				{
					url: '#',
					title: 'Federal Agency for Civic Education',
				},
				{
					url: '#',
					title: 'German Foreign Office',
				},
			],
		},
	],
	footerSponsors: [FooterLogo1, FooterLogo2, FooterLogo3],
	footerBottomText: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque aliquam lobortis cursus. Ut varius lectus libero, quis dapibus ex laoreet non. Sed ut dolor id eros tempor rutrum. Phasellus id lorem euismod, consequat metus ut, pulvinar mi. Quisque feugiat neque non elit luctus, laoreet sagittis ipsum feugiat. Proin id sagittis est. Morbi in auctor orci.'],
};
