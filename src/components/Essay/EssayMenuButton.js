import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const EssayMenuButton = ({
	title,
	url,
}) => {
	const history = useHistory();

	const onClick = e => {
		e.preventDefault();

		history.push(url);
	};
	return (
		<button
			type="button"
			className="essay_menu_item_link"
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default EssayMenuButton;
