import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getFooterMenuItems } from 'api/data';
import { JsonDataContext } from '../../context/jsonData';

const FooterMenu = () => {
	const { langApp, showPopupByKey } = useContext(JsonDataContext);
	const [menuItems, setMenuItems] = useState(null);

	const fetchAllMenuItems = async () => {
		try {
			const res = await getFooterMenuItems();

			setMenuItems(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchAllMenuItems();
	}, []);

	const handleOnClick = e => {
		e.preventDefault();

		showPopupByKey('virtualExhibit');
	};

	return (
		menuItems && (
			<nav className="footer_menu">
				{menuItems.map((col, index) => {
					return (
						<ul className="footer_menu_list" key={`title-${index}`}>
							{col.map(({
								ID,
								item_title: title,
								item_url: url,
								popup,
							}) => {
								return (
									<li className="footer_menu_item" key={ID}>
										{popup && popup[0] === 'true' ? (
											<a className="footer_menu_item_link" href="#" onClick={handleOnClick}>{title[langApp]}</a>
										) : (
											<Link className="footer_menu_item_link" to={url}>{title[langApp]}</Link>
										)}
									</li>
								);
							})}
						</ul>
					);
				})}
			</nav>
		)

	);
};

export default FooterMenu;
