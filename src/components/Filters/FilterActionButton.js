import React from 'react';
import classNames from 'classnames';

import { ReactComponent as IconFilter } from 'i/icons/filter.svg';
import { ReactComponent as IconClose } from 'i/icons/close.svg';

const FilterActionButton = ({
	title,
	onClick,
	clearMod,
}) => {
	const filtersButtonClasses = classNames('filters_item', {
		clear_mod: clearMod,
		title_mod: !clearMod,
	});

	return (
		<button
			className={filtersButtonClasses}
			type="button"
			onClick={onClick}
		>
			{title}
			<div className="filters_icon">
				{clearMod ? (
					<IconClose className="icon icon-close size_mod" />
				) : (
					<IconFilter className="icon icon-filter size_mod" />
				)}
			</div>
		</button>
	);
};

export default FilterActionButton;
