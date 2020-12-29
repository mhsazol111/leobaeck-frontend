import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as IconArrowPrev } from 'i/icons/arrow_prev.svg';
import { ReactComponent as IconArrowNext } from 'i/icons/arrow_next.svg';

const NavBlockItem = ({
	title,
	url,
	nextArrow,
	setUpdatePage,
}) => {
	const history = useHistory();

	const navBlockClasses = classNames('nav_block_item', {
		prev_mod: !nextArrow,
		next_mod: nextArrow,
	});

	const onClick = e => {
		e.preventDefault();

		history.push(url);

		if (setUpdatePage) {
			setUpdatePage(true);
		}
	};

	return (
		<button
			className={navBlockClasses}
			onClick={onClick}
			type="button"
		>
			{title}
			<div className="nav_block_icon">
				{nextArrow ? (
					<IconArrowNext className="icon size_mod" />
				) : (
					<IconArrowPrev className="icon size_mod" />
				)}
			</div>
		</button>
	);
};

export default NavBlockItem;
