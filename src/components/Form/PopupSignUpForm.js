import React, { useContext } from 'react';
import { Formik } from 'formik';

import APP_DATA from 'utils/jsonAppData';
import { Alert, useAlert } from 'components/Alert';
import { ButtonSubmit } from 'components/Buttons';
import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';
import {
	emailValidation,
	nameValidation,
	passwordValidation,
	checkboxValidation,
} from 'utils';
import { signup } from 'api/user';
import PopupInput from './PopupInput';
import CheckBox from './CheckBox';
import { SIGNUP_FORM_INPUTS } from './constant';

const validate = {
	firstName: name => nameValidation('First name', name),
	lastName: name => nameValidation('Last name', name),
	email: email => emailValidation(email),
	password: password => passwordValidation('Password', password),
	subscribeSHP: subscribeSHP => checkboxValidation('Checkbox', subscribeSHP),
};

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	subscribeSHP: false,
};

const PopupSignUpForm = ({
	openLoginPopup,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { closePopups } = useContext(UiContext);
	const [alert, showAlert, hideAlert] = useAlert();

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
				const signupResponse = await signup(values);
				setSubmitting(false);
				if (signupResponse.status === 'SUCCESS') {
					showAlert(signupResponse.message, 'success');
					resetForm(initialValues);
					setTimeout(() => {
						closePopups();
						hideAlert();
					}, 5000);
				} else {
					console.log(signupResponse);
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
				setFieldValue,
			}) => (
				<form onSubmit={handleSubmit} className="signup_form">
					<div className="popup_cols">
						<div className="popup_col v1_mod">
							<h2 className="section_title offset_v2_mod color_mod size_v2_mod">{APP_DATA.signupPopup.title[langApp]}</h2>
							<div className="popup_text">{APP_DATA.signupPopup.description[langApp]}</div>
							<div className="popup_checkbox_wrap">
								<CheckBox
									title={APP_DATA.signupPopup.checkboxText[langApp]}
									id="subscribe_check"
									name="subscribeSHP"
									onChange={() => setFieldValue('subscribeSHP', !values.subscribeSHP)}
									checked={values.subscribeSHP}
								/>
							</div>
							<div className="popup_text offset_mod">
								{APP_DATA.signupPopup.loginText[langApp]}
								<a href="#" onClick={openLoginPopup}>{APP_DATA.signupPopup.loginLink[langApp]}</a>
							</div>
						</div>
						<div className="popup_col v2_mod">
							{SIGNUP_FORM_INPUTS.map(({
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
							<div className="btn_wrap offset_mod offset_2_mod">
								{alert.visible ? (
									<Alert
										alert={alert}
										hide={hideAlert}
									/>
								) : (
									<ButtonSubmit
										buttonText={APP_DATA.signupPopup.submitButton[langApp]}
										isDisabled={isSubmitting}
									/>
								)}
							</div>
							{/* <div className="popup_warning">{APP_DATA.signupPopup.warningMessage[langApp]}</div> */}
						</div>
					</div>
				</form>
			)}
		</Formik>
	);
};

export default PopupSignUpForm;
