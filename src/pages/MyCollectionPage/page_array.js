import UserAvatar from 'i/user_avatar.svg';
import EssayImg from 'i/essay.jpg';

export const MY_COLLECTION_PAGE_ARRAY = {
	sidebarMenuArray: {
		userAvatar: UserAvatar,
		userName: 'Dr. Magdalena M. Wrobel',
		userEmail: 'mwrobel@lbi.cjh.org',
		menuList: [
			{
				url: '#',
				title: 'My Account',
			},
			{
				url: '#',
				title: 'My Collection',
				drop_list: [
					{
						url: '#',
						title: 'Saved Objects',
					},
					{
						url: '#',
						title: 'Saved Essays',
					},
					{
						url: '#',
						title: 'Downloads',
					},
				],
			},
			{
				url: '#',
				title: 'Log Out',
			},
		],
	},
	collectionBlocksArray: [
		{
			title: 'Saved Objects',
			collectionItemsListArray: [
				{
					img: EssayImg,
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					title: 'Simson “Schwalbe” KR 51 Moped',
					itemInfoList: [
						{
							title: 'Suhl, Thüringia',
						},
						{
							title: '1964',
						},
						{
							title: 'By David Brown, Leo Back Institute',
						},
					],
					buttonsList: [
						{
							url: '#',
							title: 'View Object',
						},
					],
				},
				{
					img: EssayImg,
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					title: 'Simson “Schwalbe” KR 51 Moped',
					itemInfoList: [
						{
							title: 'Suhl, Thüringia',
						},
						{
							title: '1964',
						},
						{
							title: 'By David Brown, Leo Back Institute',
						},
					],
					buttonsList: [
						{
							url: '#',
							title: 'View Object',
						},
					],
				},
			],
		},
		{
			title: 'Saved Essays',
			collectionItemsListArray: [
				{
					img: EssayImg,
					model: 'Object 001',
					date: 'Feb. 23, 2021',
					title: 'Simson “Schwalbe” KR 51 Moped',
					itemInfoList: [
						{
							title: 'Suhl, Thüringia',
						},
						{
							title: '1964',
						},
						{
							title: 'By David Brown, Leo Back Institute',
						},
					],
					buttonsList: [
						{
							url: '#',
							title: 'View Object',
						},
						{
							url: '#',
							title: 'Download',
						},
					],
				},
			],
		},
	],
};
