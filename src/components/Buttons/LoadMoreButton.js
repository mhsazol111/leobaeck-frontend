import React, { useContext } from 'react';
import { Spinner } from 'components/Spinner';
import APP_DATA from 'utils/jsonAppData';
import { JsonDataContext } from 'context/jsonData';

const LoadMoreButton = ({
	isLoading,
	isDisabled,
	onClick,
}) => {
	const { langApp } = useContext(JsonDataContext);

	return (
		<button
			type="button"
			className="btn_v6"
			disabled={isDisabled}
			onClick={onClick}
		>
			{isLoading ? (
				<Spinner />
			) : APP_DATA.loadMoreButton[langApp]}
		</button>
	);
};

export default LoadMoreButton;
