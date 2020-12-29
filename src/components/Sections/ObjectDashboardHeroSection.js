import React, { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { JsonDataContext } from 'context/jsonData';
import { AuthContext } from 'context/auth';
import { UiContext } from 'context/ui';
import { EssayMenu, EssayLinks } from 'components/Essay';
import { DashboardSlider } from 'components/DashboardSlider';
import { MopedInfoItem } from 'components/PreviewList';
import { DashboardHeroInfoList } from 'components/DashboardHeroInfoList';
import { toggleStarred } from 'api/object';

import { ReactComponent as IconLike } from 'i/icons/like.svg';
import { ReactComponent as DocumentIcon2 } from 'i/icons/document_4.svg';
import { getType } from 'utils';
import APP_DATA from 'utils/jsonAppData';

const ObjectDashboardHeroSection = ({
	sectionData,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { loggedIn } = useContext(AuthContext);
	const { openPopup } = useContext(UiContext);
	const { pathname } = useLocation();
	const [activeTab, setActiveTab] = useState('overview');

	const {
		title,
		object_info: objectInfo,
		object_description: objectDescription,
		acf,
		starred,
		id,
		object_essays: objectEssays,
	} = sectionData;

	const [isStarred, setIsStarred] = useState(starred);

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

	return (
		<>
			<section className="section no_top_offset_mod">
				<div className="section_in">
					<div className="dashboard_hero">
						<div className="dashboard_hero_row">
							<div className="dashboard_hero_col decr_mod">
								<div className="dashboard_hero_info">
									<div className="dashboard_hero_info_top">
										{acf && acf.object_number && (
											<div className="section_descr info_mod">{acf.object_number[langApp]}</div>
										)}
										<div className="dashboard_hero_like">
											<IconLike
												className={isStarred ? 'icon icon-like size_mod collection_mod active_mod' : 'icon icon-like size_mod collection_mod'}
												onClick={handleStarredClick}
											/>
										</div>
									</div>
									<div className="section_title size_v2_mod offset_v2_mod">{ReactHtmlParser(title[langApp])}</div>
									{/* {subtitle && (
										// это кто написал essay
										<div className="dashboard_essay_subtitle">{subtitle}</div>
									)} */}
									{/* {activeTab === 'description' && acf && acf.description && (
										<div className="section_descr size_mod offset_v4_mod">{ReactHtmlParser(acf.description[langApp])}</div>
									)} */}
									{activeTab === 'provenance' && acf && acf.provenance && (
										<div className="section_descr size_mod offset_v4_mod">{ReactHtmlParser(acf.provenance[langApp])}</div>
									)}
									{activeTab === 'overview' && acf && acf.short_description && (
										<div className="section_descr size_mod offset_v4_mod">{ReactHtmlParser(acf.short_description[langApp])}</div>
									)}
									{activeTab === 'overview' && objectInfo && (
										<div className="moped_info_table offset_mod height_mod">
											{objectInfo.map(({
												type,
												value,
											}, index) => {
												return (
													<MopedInfoItem
														key={index}
														type={type}
														value={value}
														linkMod
														essaysLink={`/essay/${objectEssays && objectEssays[0] && objectEssays[0].id}`}
													/>
												);
											})}
										</div>
									)}
									{activeTab === 'essays' && objectEssays && (
										<DashboardHeroInfoList infoList={objectEssays} />
									)}
									{/* {activeTab === 'provenance' && acf && acf.further_resource && (
										<div className="dashboard_hero_info_list">
											<div className="dashboard_hero_info_item essay_mod">
												<div className="dashboard_hero_info_icon v2_mod">
													<DocumentIcon2 className="icon icon-document_4 size_mod" />
												</div>
												<div className="dashboard_hero_info_descr">Discover</div>
												<a className="dashboard_hero_info_title accent_mod" href={acf.further_resource.further_resource_link}>
													{acf.further_resource.further_resource_caption}
												</a>
											</div>
										</div>
									)} */}
									{activeTab === 'description' && objectDescription && (
										<ul className="dashboard_hero_info_list">
											{objectDescription && objectDescription.map(({
												type,
												value,
											}, index) => {
												if (type && value && value[langApp] !== '') {
													return (
														<li className="dashboard_hero_info_item no_icon_mod" key={index}>
															{type && (
																<div className="dashboard_hero_info_descr">{type[langApp]}</div>
															)}
															{value && (
																<div className="dashboard_hero_info_title">{value[langApp]}</div>
															)}
														</li>
													);
												} else {
													return null;
												}
											})}
										</ul>
									)}
									{/* {essayLinksArray && (
										<EssayLinks linkList={essayLinksArray} />
									)} */}
								</div>
								{APP_DATA.readEssaysButton && acf && objectEssays && (
									<div className="dashboard_hero_btn">
										{objectEssays[0].id && (
											<Link className="btn_v4" to={`/essay/${objectEssays[0].id}`}>{APP_DATA.readEssaysButton[langApp]}</Link>
										)}
									</div>
								)}
							</div>
							<div className="dashboard_hero_col img_mod">
								<div className="dashboard_hero_menu">
									<EssayMenu
										menuList={APP_DATA.objectDashboardPage.essayMenu}
										activeTab={activeTab}
										setActiveTab={setActiveTab}
										objectId={id}
									/>
								</div>
								{acf && acf.photos && (
									<DashboardSlider slidesData={acf.photos} />
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ObjectDashboardHeroSection;
