import { ReactComponent as SettingsIcon } from 'i/icons/settings.svg';
import { ReactComponent as HeartIcon } from 'i/icons/heart.svg';
import { ReactComponent as PowerIcon } from 'i/icons/power.svg';

export const PROFILE_LINKS = [
	{
		url: '/my-account',
		title: {
			en: 'My Account',
			de: 'Mein Konto',
		},
		Icon: SettingsIcon,
		id: 'myaccount',
	},
	{
		url: '/my-collection',
		title: {
			en: 'My Collection',
			de: 'Meine Sammlung',
		},
		Icon: HeartIcon,
		id: 'mycollection',
	},
	{
		url: '#',
		title: {
			en: 'Log Out',
			de: 'Ausloggen',
		},
		Icon: PowerIcon,
		id: 'logout',
	},
];
