import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Session from 'utils/Session';
import { AuthContext } from 'context/auth';

const SidebarMenuItems = ({ sidebarMenuListArray }) => {
	const {
		setCurrentUser,
		setLoggedIn,
	} = useContext(AuthContext);
	const handleClick = (e, btnId) => {
		if (btnId === 'logout') {
			e.preventDefault();
			(Session.getSession()).removeToken();
			setCurrentUser(null);
			setLoggedIn(false);
		}
		return true;
	};

	const { pathname } = useLocation();

	return (
		<>
			<ul className="sidebar_nav_list">
				{sidebarMenuListArray && sidebarMenuListArray.map((item) => {
					return (
						<li className="sidebar_nav_item drop_mod" key={`sidebar_nav_item_${item.id}`}>
							{/* TODO : add active class 'active_link' */}
							<Link
								className={pathname === item.url ? 'sidebar_nav_link active_link' : 'sidebar_nav_link'}
								to={item.url}
								onClick={e => { handleClick(e, item.id); }}
							>
								<span className="sidebar_nav_icon">
									{/* TODO : add icons */}
								</span>
								{item.title}
							</Link>
							{item.drop_list && (
								<ul className="sidebar_subnav_list">
									{item.drop_list.map((dropItem) => {
										return (
											<li className="sidebar_subnav_item" key={dropItem.id}>
												{/* TODO : add active class 'active_link' */}
												<a className="sidebar_subnav_link" href={dropItem.url}>
													<span className="sidebar_nav_icon">
														{/* TODO : add icons */}
													</span>
													{dropItem.title}
												</a>
											</li>
										);
									})}
								</ul>
							)}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default SidebarMenuItems;
