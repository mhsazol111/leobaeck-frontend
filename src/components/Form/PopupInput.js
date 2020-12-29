import React from 'react';

const PopupInput = ({
	id,
	type,
	placeholder,
	name,
	errors,
	handleBlur,
	handleChange,
	touched,
	value,
}) => {
	return (
		<div className="form_controller">
			<dl className="form_cell form_cell_v1_mod">
				<dd className="form_field_wrap form_v1_mod hline_hide_mod">
					<label htmlFor={id}>
						<input
							className="form_field v2_mod default_mod"
							type={type}
							id={id}
							placeholder={placeholder}
							name={name}
							value={value}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						{touched && errors && (
							<div className="form_error">{touched[name] && errors[name]}</div>
						)}
					</label>
				</dd>
			</dl>
		</div>
	);
};

export default PopupInput;
