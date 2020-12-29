import React, { useContext, useEffect, useRef } from 'react';
import { JsonDataContext } from '../../context/jsonData';

const MenuTrigger = ({ handleClick }) => {
	const { mobileMenuOpen, setMobileMenuOpen } = useContext(JsonDataContext);

	const trigger = useRef(null);

	useEffect(() => {
		document.body.classList.toggle('menu_open', mobileMenuOpen);
		trigger.current.classList.toggle('active_mod', mobileMenuOpen);
	}, [mobileMenuOpen]);

	const menuTriggerClick = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<button
			className="menu_trigger"
			onKeyDown={handleClick}
			onClick={menuTriggerClick}
			type="button"
			ref={trigger}
		>
			<span className="menu_trigger_decor" />
		</button>
	);
};

export default MenuTrigger;
