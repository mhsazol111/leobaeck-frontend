import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import dateFormat from 'dateformat';

import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';
import { AuthContext } from 'context/auth';
import { UiContext } from 'context/ui';
import { ReactComponent as IconLike } from 'i/icons/like.svg';
import PlaceholderImage from 'i/placeholder-image.png';
import { toggleStarred } from 'api/object';
import MopedInfoItem from './MopedInfoItem';

const PreviewItem = ({
	title,
	objectImage,
	date,
	id,
	text,
	status,
	infoList,
	objectNumber,
	starred,
}) => {
	const { langApp } = useContext(JsonDataContext);
	// const previewItemBlockClasses = classNames('preview_item_block', {
	// 	col_2_mod: col2Mod,
	// 	collection_mod: collectionMod,
	// });

	const { loggedIn } = useContext(AuthContext);
	const { openPopup } = useContext(UiContext);
	const { pathname } = useLocation();
	const [isStarred, setIsStarred] = useState(starred);

	const handleStarredClick = async e => {
		e.preventDefault();

		if (loggedIn) {
			const { status: respStatus, message, data } = await toggleStarred(id);
			if (respStatus === 'SUCCESS') {
				setIsStarred(data.starred);
			}
			return true;
		}

		openPopup('signup', pathname);
		return true;
	};

	const getObjectUrl = () => {
		if (status === 'future') {
			return `/future-object/${id}`;
		}

		return `/object/${id}`;
	};

	return (
		<Link className="preview_item" to={getObjectUrl()}>
			<div className="preview_item_head">
				<div className="section_descr info_mod like_mod">
					{objectNumber}
					<div className="preview_like">
						<IconLike
							className={isStarred ? 'icon icon-like size_mod collection_mod active_mod' : 'icon icon-like size_mod collection_mod'}
							onClick={handleStarredClick}
						/>
					</div>
				</div>
				<div className="section_descr info_mod preview_mod">
					{dateFormat(date, 'mediumDate', true)}
				</div>
			</div>
			<div className="preview_img_w">
				{objectImage && objectImage.url ? (
					<img className="preview_img" src={objectImage.url} alt={objectImage.alt} />
				) : (
					<img className="preview_img" src={PlaceholderImage} alt="not found" />
				)}
			</div>
			<h3 className="preview_item_title">{ReactHtmlParser(title)}</h3>
			{status === 'publish' && infoList ? (
				<div className="moped_info_table no_border_mod">
					{infoList.map(({
						type,
						value,
					}, index) => {
						return (
							<MopedInfoItem
								key={index}
								type={type}
								value={value}
							/>
						);
					})}
				</div>
			) : (
				<div className="preview_item_text">
					{`${APP_DATA.objectsListPage.toBePublishedTitle[langApp]} ${dateFormat(date, 'mediumDate', true)}`}
				</div>
			)}
		</Link>
	);
};

export default PreviewItem;
