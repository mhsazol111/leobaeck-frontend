import React, { useContext, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';
import { toggleStarred } from 'api/object';

import { JsonDataContext } from 'context/jsonData';
import { AuthContext } from 'context/auth';
import { UiContext } from 'context/ui';
import { DashboardSlider } from 'components/DashboardSlider';

import { ReactComponent as IconLike } from 'i/icons/like.svg';
import APP_DATA from 'utils/jsonAppData';

const FutureObjectDashboardHeroSection = ({
	sectionData,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { loggedIn } = useContext(AuthContext);
	const { openPopup } = useContext(UiContext);
	const { pathname } = useLocation();

	const {
		title,
		image,
		object_number: objectNumber,
		post_date,
		text,
		button,
		starred,
		id,
	} = sectionData;

	const [isStarred, setIsStarred] = useState(starred);

	console.log('post_date', post_date);

	const $post_date = `${post_date.replace(/ /g, 'T')}`;

	const handleStarredClick = async e => {
		e.preventDefault();

		if (loggedIn) {
			const { status, message, data } = await toggleStarred(id);
			if (status === 'SUCCESS') {
				setIsStarred(data.starred);
			}
			return true;
		}

		openPopup('signup', pathname);
		return true;
	};

	const onSubscribeClick = async e => {
		if (!loggedIn) {
			e.preventDefault();
			openPopup('signup');
		}

		return true;
	};

	return (
		<>
			<section className="section no_top_offset_mod">
				<div className="section_in">
					<div className="dashboard_hero">
						<div className="dashboard_hero_row">
							<div className="dashboard_hero_col decr_mod">
								<div className="dashboard_hero_info">
									<div className="dashboard_hero_info_top">
										{objectNumber && (
											<div className="section_descr info_mod">{objectNumber[langApp]}</div>
										)}
										<div className="dashboard_hero_like">
											<IconLike
												className={isStarred ? 'icon icon-like size_mod collection_mod active_mod' : 'icon icon-like size_mod collection_mod'}
												onClick={handleStarredClick}
											/>
										</div>
									</div>
									<h2 className="section_title size_v2_mod offset_v2_mod">{title[langApp]}</h2>
									<div className="section_descr info_mod offset_v4_mod">{APP_DATA.objectDashboardPage.releaseDateTitle[langApp]}</div>
									<h3 className="section_title size_v2_mod offset_v2_mod color_v2_mod">{dateFormat($post_date, 'mediumDate', true)}</h3>
									<div className="section_descr size_mod offset_v4_mod">{ReactHtmlParser(text[langApp])}</div>
								</div>
								{button && (
									<Link
										className="btn_v4"
										to="/my-account"
										onClick={e => onSubscribeClick(e)}
									>
										{button[langApp]}
									</Link>
								)}
							</div>
							{image && (
								<div className="dashboard_hero_col img_mod">
									<div className="dashboard_hero_img future_img_mod">
										<img className="section_img" src={image.url} alt={image.alt} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FutureObjectDashboardHeroSection;
