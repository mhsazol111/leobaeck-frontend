import React from 'react';
import classNames from 'classnames';

const CheckBox = ({
	title,
	id,
	name,
	checked,
	onChange,
	v2Mod,
}) => {
	const radioCheckClasses = classNames('radio_check', {
		check_2_mod: v2Mod,
		check_1_mod: !v2Mod,
	});

	const radioCheckTextClasses = classNames('radio_check_text', {
		check_2_mod: v2Mod,
		check_1_mod: !v2Mod,
	});

	return (
		<label className={radioCheckClasses} htmlFor={id}>
			<input
				className="radio_check_input"
				type="checkbox"
				id={id}
				name={name}
				onChange={onChange}
				checked={checked}
			/>
			<span className={radioCheckTextClasses}>{title}</span>
		</label>
	);
};

export default CheckBox;
