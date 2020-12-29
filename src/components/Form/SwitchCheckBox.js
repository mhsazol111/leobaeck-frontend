import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import classNames from 'classnames';

const SwitchCheckBox = ({
	title,
	id,
	name,
	value,
	defaultChecked,
	checked,
	v3Mod,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const radioCheckClasses = classNames('my_account_notifications active', {
		v3_mod: v3Mod,
	});

	return (
		<label className={radioCheckClasses} htmlFor={id}>
			<input
				className="my_account_checkbox switch"
				type="checkbox"
				id={id}
				name={name}
				defaultChecked={defaultChecked}
			/>
			<span>{title}</span>
		</label>
	);
};

export default SwitchCheckBox;
