import React from 'react';

import { ReactComponent as IconClose } from 'i/icons/close_2.svg';

const PopupCloseBtn = ({
	onClick,
}) => {
	return (
		<button
			className="popup_close v2_mod"
			type="button"
			onClick={onClick}
		>
			<IconClose className="icon icon-close_2 size_mod" />
		</button>
	);
};

export default PopupCloseBtn;
