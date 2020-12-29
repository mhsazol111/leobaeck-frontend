import React, { useContext, useState } from 'react';
import { JsonDataContext } from 'context/jsonData';
import { AuthContext } from 'context/auth';
import { UiContext } from 'context/ui';
import dateFormat from 'dateformat';
import ReactHtmlParser from 'react-html-parser';
import { Link, useLocation } from 'react-router-dom';
import APP_DATA from 'utils/jsonAppData';
import { toggleStarred } from 'api/object';
import { ReactComponent as IconLike } from 'i/icons/like.svg';

// components
import PlaceholderImage from 'i/placeholder-image.png';
import { getType } from 'utils';
import MopedInfoItem from '../PreviewList/MopedInfoItem';

// content

const PopupObjectItem = ({
	objectData,
	handleClosePopup,
	isTimelinePage,
}) => {
	const {
		id,
		title,
		acf,
		status,
		object_info: objectInfo,
		button,
		text,
		post_date,
		object_number,
		image,
		starred,
	} = objectData;
	const { pathname } = useLocation();
	const { langApp, showPopupByKey } = useContext(JsonDataContext);
	const { loggedIn } = useContext(AuthContext);
	const { openPopup } = useContext(UiContext);

	const [isStarred, setIsStarred] = useState(starred);

	const handleStarredClick = async e => {
		e.preventDefault();

		if (loggedIn) {
			const { status: statusT, message, data } = await toggleStarred(id);
			if (statusT === 'SUCCESS') {
				setIsStarred(data.starred);
			}
			return true;
		}

		openPopup('signup', pathname);
		showPopupByKey();
		return true;
	};

	const handleButtonOnClick = () => {
		showPopupByKey();
	};

	const onSubscribeClick = async e => {
		if (!loggedIn) {
			e.preventDefault();
			handleClosePopup();
			openPopup('signup');
		}

		return true;
	};

	return (
		<>
			<div className="panel_item">
				<div className="essay_sidebar_head">
					{acf && acf.object_number && (
						<div className="essay_sidebar_title">{acf.object_number[langApp]}</div>
					)}
					{object_number && (
						<div className="essay_sidebar_title">{object_number[langApp]}</div>
					)}
					<div className="essay_slidebad_like">
						<IconLike
							className={isStarred ? 'icon icon-like size_mod collection_mod active_mod' : 'icon icon-like size_mod collection_mod'}
							onClick={handleStarredClick}
						/>
					</div>
				</div>
				{title && <h3 className="section_title size_v2_mod offset_mod">{ReactHtmlParser(title[langApp])}</h3>}
				{/* {menu && <EssayMenu menuList={menu} />} */}
				<ul className="essay_menu">
					<li className="essay_menu_item">
						<Link
							className="essay_menu_item_link"
							to={status === 'publish' ? `object/${id}` : `future-object/${id}`}
							onClick={handleButtonOnClick}
						>
							{APP_DATA.objectPopup.viewObjectButton[langApp]}
						</Link>
					</li>
					{
						!isTimelinePage && (
							<li className="essay_menu_item">
								<a
									className="essay_menu_item_link"
									href={`${APP_DATA.objectPopup.viewInTimelineButton.url}#${id}`}
									target="_blank"
									rel="noreferrer"
								>
									{APP_DATA.objectPopup.viewInTimelineButton.title[langApp]}
								</a>
							</li>
						)
					}
					{
						isTimelinePage && (
							<li className="essay_menu_item">
								<a
									className="essay_menu_item_link"
									href={`${APP_DATA.objectPopup.viewInMapButton.url}#${id}`}
									target="_blank"
									rel="noreferrer"
								>
									{APP_DATA.objectPopup.viewInMapButton.title[langApp]}
								</a>
							</li>
						)
					}

				</ul>
				{status === 'publish' ? (
					<>
						{acf && acf.photos && acf.photos[0] ? (
							<div className="panel_img_wrap">
								<img className="panel_img" src={acf.photos[0].photo.url} alt={acf.photos[0].photo.alt} />
							</div>
						) : (
							<img className="preview_img" src={PlaceholderImage} alt="Not Found" />
						)}
						{acf && acf.short_description && <div className="panel_text">{ReactHtmlParser(acf.short_description[langApp])}</div>}
						{objectInfo && (
							<div className="moped_info_table offset_mod">
								{objectInfo.map(({ type, value }) => {
									const preparedValue = getType(value) === 'Object' ? value[langApp] : value;
									return (
										<MopedInfoItem type={type} value={preparedValue} />
									);
								})}
							</div>
						)}
						<div className="panel_item_buttons">
							<Link className="btn_v4 panel_item_button" to={`object/${id}`} onClick={handleButtonOnClick}>
								{APP_DATA.objectPopup.viewObjectButton[langApp]}
							</Link>
							{acf && acf.object_essays ? (
								<Link
									className="btn_v4 panel_item_button"
									to={`essay/${acf.object_essays[0].essay_link.ID}`}
									onClick={handleButtonOnClick}
								>
									{APP_DATA.objectPopup.readEssaysButton[langApp]}
								</Link>
							) : null}
						</div>
					</>
				) : (
					<>
						{image && image ? (
							<div className="panel_img_wrap">
								<img className="panel_img" src={image.url} alt={image.alt} />
							</div>
						) : (
							<img className="preview_img" src={PlaceholderImage} alt="Not Found" />
						)}
						<div className="section_descr info_mod offset_v4_mod">{APP_DATA.objectDashboardPage.releaseDateTitle[langApp]}</div>
						<h3 className="section_title size_v2_mod offset_v2_mod color_v2_mod">{dateFormat(post_date, 'mediumDate', true)}</h3>
						<div className="section_descr size_mod offset_v4_mod">{ReactHtmlParser(text[langApp])}</div>
						<a
							className="btn_v4"
							href="/my-account"
							onClick={e => onSubscribeClick(e)}
						>
							{button[langApp]}
						</a>
					</>
				)}
			</div>
		</>
	);
};

export default PopupObjectItem;
