import React, { useContext } from 'react';

import { AuthContext } from 'context/auth';
import { Spinner } from 'components/Spinner';
import { Alert } from 'components/Alert';

import { useLocation } from 'react-router-dom';
import SidebarMenuItems from './SidebarMenuItems';

import { PROFILE_SIDEBAR_MENU } from './page_array';

const SidebarMenu = ({
	isSubmitting,
	hideAlert,
	alert,
}) => {
	const { currentUser: { firstName, lastName, email } } = useContext(AuthContext);
	const {
		userAvatar,
		menuList,
		sidebarButtons,
	} = PROFILE_SIDEBAR_MENU;
	const { pathname } = useLocation();

	return (
		<>
			<div className="sidebar_menu">
				<div className="sidebar_menu_head">
					<div className="sidebar_avatar_w">
						<img className="sidebar_menu_avatar" src={userAvatar} alt="" />
					</div>
					<div className="sidebar_user_info">
						<div className="user_info_name">{`${firstName} ${lastName}`}</div>
						<div className="user_info_email">{email}</div>
					</div>
				</div>
				<div className="sidebar_bottom">
					<SidebarMenuItems sidebarMenuListArray={menuList} />
					{pathname === '/my-account' && (
						<div className="sidebar_btns_w">
							<div className="sidebar_btns_item">
								{alert && alert.visible ? (
									<Alert
										alert={alert}
										hide={hideAlert}
									/>
								) : (
									<button
										className="btn_v5"
										type="submit"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<Spinner />
										) : sidebarButtons.saveBtnTitle}
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SidebarMenu;
