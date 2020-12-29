import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import { Spinner } from 'components/Spinner';

const ButtonSubmit = ({
	buttonText,
	isDisabled,
}) => {
	const { showPopupByKey } = useContext(JsonDataContext);

	const handleOpenPopup = () => {
		showPopupByKey('welcome');
	};

	return (
		<button
			className="btn_v2 full_btn"
			type="submit"
			disabled={isDisabled}
			onClick={handleOpenPopup}
		>
			{isDisabled ? (
				<Spinner />
			) : buttonText}
		</button>
	);
};

export default ButtonSubmit;
