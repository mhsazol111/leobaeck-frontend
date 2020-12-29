import React, { useContext, useEffect } from 'react';
import { Formik } from 'formik';

// components
import { SidebarMenu } from 'components/SidebarMenu';
import { FormItem } from 'components/FormItem';
import { useAlert } from 'components/Alert';

// content
import {
	emailValidation,
	passwordValidation,
	nameValidation,
	checkboxValidation,
} from 'utils';
import { AuthContext } from 'context/auth';
import { UiContext } from 'context/ui';
import { updateCurrentUser } from 'api/user';
import { MY_ACCOUNT_PAGE_ARRAY } from './page_array';

const validate = {
	firstName: name => nameValidation('First name', name),
	lastName: name => nameValidation('Last name', name),
	email: email => emailValidation(email),
	newPassword: newPassword => passwordValidation('New Password', newPassword, true),
	repeatNewPassword: repeatNewPassword => passwordValidation('Repeat New Password', repeatNewPassword, true),
	currentPassword: currentPassword => passwordValidation('Current Password', currentPassword, true),
	subscribeSHP: subscribeSHP => checkboxValidation('Checkbox', subscribeSHP),
	subscribeLBI: subscribeLBI => checkboxValidation('Checkbox', subscribeLBI),
};

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	newPassword: '',
	repeatNewPassword: '',
	currentPassword: '',
	subscribeSHP: false,
	subscribeLBI: false,
};

const MyAccountPage = () => {
	const { currentUser, setCurrentUser } = useContext(AuthContext);
	const { openPopup } = useContext(UiContext);

	const { welcomePopupShown } = currentUser;

	const [alert, showAlert, hideAlert] = useAlert();

	useEffect(() => {
		if (!welcomePopupShown) {
			openPopup('welcome');
		}
	}, [
		welcomePopupShown,
		openPopup,
	]);

	const fetchInitialValue = () => ({
		firstName: currentUser.firstName || initialValues.firstName,
		lastName: currentUser.lastName || initialValues.lastName,
		email: currentUser.email || initialValues.email,
		newPassword: initialValues.newPassword,
		repeatNewPassword: initialValues.repeatNewPassword,
		currentPassword: initialValues.currentPassword,
		subscribeSHP: !!(currentUser.subscribeSHP || initialValues.subscribeSHP),
		subscribeLBI: !!(currentUser.subscribeLBI || initialValues.subscribeLBI),
	});

	return (
		<Formik
			initialValues={fetchInitialValue()}
			mapPropsToValues={() => fetchInitialValue()}
			validate={values => Object.keys(values).reduce((errors, field) => {
				const error = validate[field](values[field]);
				return {
					...errors,
					...(error && { [field]: error }),
				};
			}, {})}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				console.log('onSubmit', values);
				const updateCurrentUserResponse = await updateCurrentUser(values);
				setSubmitting(false);
				if (updateCurrentUserResponse.status === 'SUCCESS') {
					setCurrentUser(updateCurrentUserResponse.data);
					showAlert(updateCurrentUserResponse.message, 'success');
					setTimeout(() => {
						hideAlert();
					}, 5000);
				} else {
					console.log(updateCurrentUserResponse);
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
				<section className="section">
					<form onSubmit={handleSubmit} className="section_in wrap_mod">
						<div className="section_col side_mod">
							<SidebarMenu
								isSubmitting={isSubmitting}
								hideAlert={hideAlert}
								alert={alert}
							/>
						</div>
						<div className="section_col content_mod">
							<div className="section_title decor_v3_mod size_v2_mod offset_v4_mod">{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.formHeadTitle}</div>
							<div className="section_row right_offset_v2_mod">
								<div className="section_col col_2_mod">
									<div className="section_title size_v3_mod offset_v2_mod">{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.formLeftColTitle}</div>
									{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.formLeftFields && MY_ACCOUNT_PAGE_ARRAY.accountFormArray.formLeftFields.map((item) => (
										<FormItem
											key={item.id}
											formItemArray={item}
											errors={errors}
											handleBlur={handleBlur}
											handleChange={handleChange}
											value={values[item.id]}
											touched={touched}
											setFieldValue={setFieldValue}
										/>
									))}
								</div>
								<div className="section_col col_2_mod">
									<div className="section_title size_v3_mod offset_v2_mod">{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.formRighttColTitle}</div>
									{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.forRightFields && MY_ACCOUNT_PAGE_ARRAY.accountFormArray.forRightFields.map((item) => (
										<FormItem
											key={item.id}
											formItemArray={item}
											errors={errors}
											handleBlur={handleBlur}
											handleChange={handleChange}
											value={values[item.id]}
											touched={touched}
											setFieldValue={setFieldValue}
										/>
									))}
									<div className="my_account_notifications_w">
										<div className="section_title size_v3_mod offset_v2_mod">{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.notificationsTitle}</div>
										{MY_ACCOUNT_PAGE_ARRAY.accountFormArray.notificationsFields && MY_ACCOUNT_PAGE_ARRAY.accountFormArray.notificationsFields.map((item) => (
											<FormItem
												key={item.id}
												formItemArray={item}
												errors={errors}
												handleBlur={handleBlur}
												handleChange={handleChange}
												value={values[item.id]}
												touched={touched}
												setFieldValue={setFieldValue}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</form>
				</section>
			)}
		</Formik>
	);
};

export default MyAccountPage;
