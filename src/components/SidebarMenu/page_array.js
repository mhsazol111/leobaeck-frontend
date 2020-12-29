import UserAvatar from 'i/user_avatar.svg';

export const PROFILE_SIDEBAR_MENU = {
	userAvatar: UserAvatar,
	menuList: [
		{
			url: '/my-account',
			title: 'My Account',
			id: 'myaccount',
		},
		{
			url: '/my-collection',
			title: 'My Collection',
			id: 'mycollection',
			drop_list: [
				{
					url: '/my-collection#saved-objects',
					title: 'Saved Objects',
					id: 'mycollection-savedobjects',
				},
				// {
				// 	url: '/my-collection#saved-essays',
				// 	title: 'Saved Essays',
				// 	id: 'mycollection-savedessays',
				// },
				// {
				// 	url: '/my-collection#downloads',
				// 	title: 'Downloads',
				// 	id: 'mycollection-saveddownloads',
				// },
			],
		},
		{
			url: '#',
			title: 'Log Out',
			id: 'logout',
		},
	],
	sidebarButtons: {
		saveBtnTitle: 'SAVE changes',
	},

};
