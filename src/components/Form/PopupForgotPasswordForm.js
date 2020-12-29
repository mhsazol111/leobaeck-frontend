import React, { useContext } from 'react';
import { Formik } from 'formik';

import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';

import APP_DATA from 'utils/jsonAppData';
import { Alert, useAlert } from 'components/Alert';
import { ButtonSubmit } from 'components/Buttons';
import { emailValidation } from 'utils';
import { forgotPassword } from 'api/user';

import PopupInput from './PopupInput';
import { FORGOT_PASSWORD_FORM_INPUTS } from './constant';

const validate = {
	email: email => emailValidation(email),
};

const initialValues = {
	email: '',
};

const PopupForgotPasswordForm = () => {
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
				const forgotPasswordResponse = await forgotPassword(values);
				setSubmitting(false);
				if (forgotPasswordResponse.status === 'SUCCESS') {
					showAlert(forgotPasswordResponse.message, 'success');
					resetForm(initialValues);
					setTimeout(() => {
						closePopups();
						hideAlert();
					}, 5000);
				} else {
					console.log(forgotPasswordResponse);
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
					{FORGOT_PASSWORD_FORM_INPUTS.map(({
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
								buttonText={APP_DATA.forgotPasswordPopup.submitButton[langApp]}
								isDisabled={isSubmitting}
							/>
						)}
					</div>
				</form>
			)}
		</Formik>
	);
};

export default PopupForgotPasswordForm;
