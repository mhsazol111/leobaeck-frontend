import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import classNames from 'classnames';

const FormItem = ({
	formItemArray,
	errors,
	handleBlur,
	handleChange,
	value,
	touched,
	setFieldValue,
	v3Mod,
}) => {
	const {
		id,
		type,
		title,
	} = formItemArray;
	const { langApp } = useContext(JsonDataContext);
	const radioCheckClasses = classNames('my_account_notifications active', {
		v3_mod: v3Mod,
	});

	return (
		<>
			{(type === 'checkbox')
				? (
					<label className={radioCheckClasses} htmlFor={id}>
						<input
							className="my_account_checkbox switch"
							type="checkbox"
							id={id}
							name={id}
							checked={value}
							onBlur={handleBlur}
							onChange={() => setFieldValue(id, !value)}
						/>
						{touched && errors && (
							<div className="form_error">{touched[id] && errors[id]}</div>
						)}
						<span>{title[langApp]}</span>
					</label>
				)
				: (
					<dl className="form_cell form_cell_v2_mod">
						<dt className="form_cell_title form_v2_mod">
							<span>{title}</span>
						</dt>
						<dd className="form_field_wrap form_v2_mod">
							<label htmlFor="Title">
								<input
									className="form_field default_mod account_mod"
									type={type}
									id={id}
									name={id}
									value={value}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched && errors && (
									<div className="form_error">{touched[id] && errors[id]}</div>
								)}
							</label>
						</dd>
					</dl>
				)}
		</>
	);
};

export default FormItem;
