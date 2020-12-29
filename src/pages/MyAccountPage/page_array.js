import UserAvatar from 'i/user_avatar.svg';

export const MY_ACCOUNT_PAGE_ARRAY = {
	accountFormArray: {
		formHeadTitle: 'My Account',
		formLeftColTitle: 'Personal Data',
		formLeftFields: [
			{
				title: 'First name',
				type: 'text',
				id: 'firstName',
			},
			{
				title: 'Last name',
				type: 'text',
				id: 'lastName',
			},
			{
				title: 'Email Address',
				type: 'email',
				id: 'email',
			},
		],
		formRighttColTitle: 'Account Data',
		forRightFields: [
			{
				title: 'New Password',
				type: 'password',
				id: 'newPassword',
			},
			{
				title: 'Repeat New Password',
				type: 'password',
				id: 'repeatNewPassword',
			},
			{
				title: 'Current Password',
				type: 'password',
				id: 'currentPassword',
			},
		],
		notificationsTitle: 'Notifications',
		notificationsFields: [
			{
				title: {
					en: 'I wish to receive news, promotions and invitations from The Shared History Project',
					de: 'Ich möchte Neuigkeiten, Werbeaktionen und Einladungen von The Shared History Project erhalten',
				},
				id: 'subscribeSHP',
				type: 'checkbox',
			},
			{
				title: {
					en: 'I wish to receive news, promotions and invitations from Leo Baeck Institute',
					de: 'Ich möchte Neuigkeiten, Werbeaktionen und Einladungen vom Leo-Baeck-Institut erhalten',
				},
				id: 'subscribeLBI',
				type: 'checkbox',
			},
		],
	},
};
