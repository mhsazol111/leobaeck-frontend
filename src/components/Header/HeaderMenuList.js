import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMainMenuItems } from 'api/data';
import { JsonDataContext } from '../../context/jsonData';

const HeaderMenuList = () => {
	const { langApp } = useContext(JsonDataContext);
	const [menuItems, setMenuItems] = useState(null);

	const fetchAllMenuItems = async () => {
		try {
			const res = await getMainMenuItems();
			setMenuItems(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchAllMenuItems();
	}, []);

	const menuItemsSorted = [];

	if (menuItems) {
		Object.keys(menuItems).map(item => {
			menuItemsSorted.push(menuItems[item]);
			return item;
		});
	}

	menuItemsSorted.sort((a, b) => {
		return a.menu_order > b.menu_order ? 1 : -1;
	});

	return (
		menuItems ? (
			<ul className="header_nav_list">
				{/* {Object.keys(menuItems).map(item => {
					const {
						ID,
						item_title: title,
						item_url: url,
					} = menuItems[item];
					return (
						<li className="header_nav_item" key={ID}>
							<Link className="header_nav_link" to={url}>
								<span className="link_decor" />
								<span className="header_nav_link_title">{title[langApp]}</span>
							</Link>
						</li>
					);
				})} */}
				{menuItemsSorted.map(item => {
					const {
						ID,
						item_title: title,
						item_url: url,
					} = item;
					return (
						<li className="header_nav_item" key={ID}>
							<Link className="header_nav_link" to={url}>
								<span className="link_decor" />
								<span className="header_nav_link_title">{title[langApp]}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		) : null
	);
};

export default HeaderMenuList;
