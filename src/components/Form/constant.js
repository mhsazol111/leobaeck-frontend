export const LOGIN_FORM_INPUTS = [
	{
		type: 'email',
		id: 'login_email',
		placeholder: 'Email*',
		name: 'email',
		required: true,
	},
	{
		type: 'password',
		id: 'login_password',
		placeholder: 'Password*',
		name: 'password',
		required: true,
	},
];

export const FORGOT_PASSWORD_FORM_INPUTS = [
	{
		type: 'email',
		id: 'forgot_password_email',
		placeholder: 'Email*',
		name: 'email',
		required: true,
	},
];

export const RESET_PASSWORD_FORM_INPUTS = [
	{
		type: 'password',
		id: 'reset_password_newPassword',
		placeholder: 'New password*',
		name: 'newPassword',
		required: true,
	},
	{
		type: 'password',
		id: 'reset_password_repeatNewPassword',
		placeholder: 'Repeat new password*',
		name: 'repeatNewPassword',
		required: true,
	},
];

export const SIGNUP_FORM_INPUTS = [
	{
		type: 'text',
		id: 'signup_firstName',
		placeholder: 'First name*',
		name: 'firstName',
		required: true,
	},
	{
		type: 'text',
		id: 'signup_lastName',
		placeholder: 'Last name*',
		name: 'lastName',
		required: true,
	},
	{
		type: 'email',
		id: 'signup_email',
		placeholder: 'Email*',
		name: 'email',
		required: true,
	},
	{
		type: 'password',
		id: 'signup_password',
		placeholder: 'Password*',
		name: 'password',
		required: true,
	},
];
