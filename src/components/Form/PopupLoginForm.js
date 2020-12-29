import React, { useContext } from 'react';
import { Formik } from 'formik';

import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';
import { AuthContext } from 'context/auth';

import APP_DATA from 'utils/jsonAppData';
import { Alert, useAlert } from 'components/Alert';
import { ButtonSubmit } from 'components/Buttons';
import { emailValidation, passwordValidation } from 'utils';
import Session from 'utils/Session';
import { login, fetchCurrentUser } from 'api/user';

import { useHistory } from 'react-router-dom';
import PopupInput from './PopupInput';
import { LOGIN_FORM_INPUTS } from './constant';

const validate = {
	email: email => emailValidation(email),
	password: password => passwordValidation('Password', password),
};

const initialValues = {
	email: '',
	password: '',
};

const PopupLoginForm = () => {
	const { langApp } = useContext(JsonDataContext);
	const { closePopups, uiState: { redirectAfterLogin } } = useContext(UiContext);
	const {
		setCurrentUser,
		setLoggedIn,
	} = useContext(AuthContext);

	const [alert, showAlert, hideAlert] = useAlert();

	const history = useHistory();

	return (
		<Formik
			initialValues={initialValues}
			mapPropsToValues={() => {
				return {
					...initialValues,
				};
			}}
			validate={values => Object.keys(values).reduce((errors, field) => {
				const error = validate[field](values[field]);
				return {
					...errors,
					...(error && { [field]: error }),
				};
			}, {})}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				console.log('onSubmit', values);
				const loginResponse = await login(values);
				setSubmitting(false);
				if (loginResponse.token) {
					console.log('loginResponse success', loginResponse);
					(Session.getSession()).setToken(loginResponse.token);
					const currentUser = await fetchCurrentUser();
					if (currentUser) {
						setCurrentUser(currentUser.data);
						setLoggedIn(true);
						resetForm(initialValues);
						const redirectAfterLoginTemp = redirectAfterLogin || '/my-account';
						closePopups();
						history.push(redirectAfterLoginTemp);
					} else {
						console.log(currentUser);
						showAlert('error', 'danger');
					}
				} else {
					console.log(loginResponse);
					showAlert('error', 'danger');
				}
			}}
			validateOnChange={false}
		>
			{({
				isSubmitting,
				handleSubmit,
				handleBlur,
				handleChange,
				values,
				errors,
				touched,
			}) => (
				<form onSubmit={handleSubmit} className="popup_form">
					{LOGIN_FORM_INPUTS.map(({
						id,
						type,
						placeholder,
						name,
						required,
					}) => {
						return (
							<PopupInput
								key={id}
								id={id}
								type={type}
								placeholder={placeholder}
								name={name}
								required={required}
								errors={errors}
								handleBlur={handleBlur}
								handleChange={handleChange}
								value={values[name]}
								touched={touched}
							/>
						);
					})}
					<div className="btn_wrap offset_mod">
						{alert.visible ? (
							<Alert
								alert={alert}
								hide={hideAlert}
							/>
						) : (
							<ButtonSubmit
								buttonText={APP_DATA.loginPopup.submitButton[langApp]}
								isDisabled={isSubmitting}
							/>
						)}
					</div>
				</form>
			)}
		</Formik>
	);
};

export default PopupLoginForm;
