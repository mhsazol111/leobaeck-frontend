import React from 'react';
import classNames from 'classnames';

import { ReactComponent as IconArrowPrev } from 'i/icons/arrow_prev.svg';
import { ReactComponent as IconArrowNext } from 'i/icons/arrow_next.svg';

const SliderControls = ({
	nextArrow,
	prevMod,
	nextMod,
	heroMod,
	dashboardMod,
	panelMod,
	onClick,
}) => {
	const slideControlClasses = classNames('slider_control', {
		prev_mod: prevMod,
		next_mod: nextMod,
		hero_mod: heroMod,
		dashboard_mod: dashboardMod,
		panel_mod: panelMod,
	});

	return (
		<button type="button" className={slideControlClasses} onClick={onClick}>
			{(nextArrow)
				? <IconArrowNext className="icon icon-arrow_next size_mod" />
				: (
					<IconArrowPrev className="icon icon-arrow_prev size_mod" />
				)}
		</button>
	);
};

export default SliderControls;
