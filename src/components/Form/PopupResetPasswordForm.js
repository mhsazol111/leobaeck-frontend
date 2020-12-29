import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useLocation } from 'react-router-dom';
import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';

import APP_DATA from 'utils/jsonAppData';
import { Alert, useAlert } from 'components/Alert';
import { ButtonSubmit } from 'components/Buttons';
import { passwordValidation } from 'utils';
import { resetPassword } from 'api/user';

import PopupInput from './PopupInput';
import { RESET_PASSWORD_FORM_INPUTS } from './constant';

const validate = {
	newPassword: newPassword => passwordValidation('New password', newPassword),
	repeatNewPassword: repeatNewPassword => passwordValidation('Repeat new password', repeatNewPassword),
};

const initialValues = {
	newPassword: '',
	repeatNewPassword: '',
};

const PopupResetPasswordForm = (props) => {
	const { langApp } = useContext(JsonDataContext);
	const { closePopups } = useContext(UiContext);
	const [alert, showAlert, hideAlert] = useAlert();
	const { pathname } = useLocation();
	const resetToken = pathname.split('/')[2];

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
				const resetPasswordResponse = await resetPassword({
					...values,
					resetToken,
				});
				setSubmitting(false);
				if (resetPasswordResponse.status === 'SUCCESS') {
					showAlert(resetPasswordResponse.message, 'success');
					resetForm(initialValues);
					setTimeout(() => {
						closePopups();
						hideAlert();
					}, 5000);
				} else {
					console.log(resetPasswordResponse);
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
					{RESET_PASSWORD_FORM_INPUTS.map(({
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
								buttonText={APP_DATA.resetPasswordPopup.submitButton[langApp]}
								isDisabled={isSubmitting}
							/>
						)}
					</div>
				</form>
			)}
		</Formik>
	);
};

export default PopupResetPasswordForm;
