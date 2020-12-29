import React, { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { JsonDataContext } from 'context/jsonData';
import { UiContext } from 'context/ui';
import { getAllEvents } from 'api/event';
import { getAllObjects } from 'api/object';

// components
import HomeHeroSection from 'components/Sections/HomeHeroSection';
import { ExploreBlock } from 'components/ExploreBlock';
import { WeekObject } from 'components/WeekObject';
import { UpcomingObjects } from 'components/UpcomingObjects';
// import { PreviewList } from 'components/PreviewList';
import { Banner } from 'components/Banner';
import { ListBlock } from 'components/ListBlock';
import { VisitBlock } from 'components/VisitBlock';
import { Alert, useAlert } from 'components/Alert';

// content
import APP_DATA from 'utils/jsonAppData';
import { getPageBySlug } from '../../utils';

const HomePage = ({
	match: {
		path,
		params,
	},
}) => {
	const [events, setEvents] = useState(null);
	const [isEventsLoaded, setEventsLoaded] = useState(false);
	const [isFetchError, setFetchError] = useState(false);
	const [alert, showAlert, hideAlert] = useAlert();
	const [listBlockData, setListBlockData] = useState(null);
	const [lastObjectData, setLastObjectData] = useState(null);
	const [lastObjectDataLoaded, setLastObjectDataLoaded] = useState(false);
	const [currentPageData, setCurrentPageData] = useState(null);

	const { langApp } = useContext(JsonDataContext);
	const { pagesData } = useContext(JsonDataContext);
	const { appBaseData } = useContext(JsonDataContext);
	const { openPopup } = useContext(UiContext);

	const getPageData = () => {
		const currentData = getPageBySlug(pagesData, 'home');
		const preparedCurrentPageData = currentData[0].page_fields;

		setCurrentPageData(preparedCurrentPageData);
	};

	const getLastObjects = async () => {
		try {
			const res = await getAllObjects();

			setLastObjectData(res.data[0]);

			// console.log(res);

			setLastObjectDataLoaded(true);
		} catch (err) {
			showAlert(err.message, 'danger');
			setLastObjectDataLoaded(false);
		}
	};

	const fetchAllEvents = async () => {
		try {
			const res = await getAllEvents();

			setEvents(res.data);
			setEventsLoaded(true);
		} catch (err) {
			showAlert(err.message, 'danger');
			setEventsLoaded(false);
			setFetchError(true);
		}
	};

	useEffect(() => {
		fetchAllEvents();
	}, []);

	useEffect(() => {
		if (path === '/reset-password/:resetToken' && params && params.resetToken) {
			openPopup('resetPassword');
		}
	}, [
		path,
		params,
	]);

	useEffect(() => {
		if (pagesData) {
			getPageData();
		}
	}, [pagesData]);

	useEffect(() => {
		if (appBaseData) {
			setListBlockData(appBaseData);
		}
	}, [appBaseData]);

	console.log(currentPageData);

	return (
		<>
			{currentPageData ? (
				<>
					<Helmet>
						<title>{currentPageData.title[langApp]}</title>
					</Helmet>
					<HomeHeroSection sectionData={currentPageData.hero_slider} />
					<section className="section">
						<div className="section_in">
							<div className="hero_project_content">
								<div className="hero_project_text">{currentPageData.under_slider_first[langApp]}</div>
								<div className="hero_project_title">{currentPageData.under_slider_second[langApp]}</div>
							</div>
						</div>
					</section>
					<ExploreBlock
						title={currentPageData.explore_our_objects_title[langApp]}
						exploreBlockData={APP_DATA.homePage.exploreOurObjects}
						widthV1Mod
						leftMod
						rightOffsetMod
						col3Mod
					/>
					<VisitBlock
						title={currentPageData.visit_exhibit_home_title[langApp]}
						buttonTitle={currentPageData.visit_exhibit_home_btn_text[langApp]}
						buttonUrl={currentPageData.visit_exhibit_home_btn_link}
						img={APP_DATA.virtualRoomSection.img}
						widthV1Mod
					/>
					<WeekObject
						headTitle={currentPageData.week_object_main_title[langApp]}
						btnTitle={currentPageData.week_object_main_btn_title[langApp]}
					/>
					<section className="section">
						<div className="section_in">
							<div className="section_side width_v3_mod">
								<UpcomingObjects
									title={currentPageData.week_object_sub_title[langApp]}
									buttonTitle={currentPageData.week_object_sub_btn_title[langApp]}
								/>
							</div>
						</div>
					</section>
				</>
			) : null}
			<Banner
				bannerArray={APP_DATA.homePage.bannerArray}
				indentMod
				bgMod
				wrapWidthV1Mod
				titleV1Mod
				titleColV1Mod
				titleColorMod
				textColV1Mod
				textColTopOffsetV1Mod
				descrColorMod
				descrOffsetMod
			/>
			{isEventsLoaded && currentPageData && (
				<section className="section">
					<div className="section_in">
						<div className="section_side width_v3_mod">
							<h2 className="section_title decor_mod offset_mod">{currentPageData.upcoming_event_title[langApp]}</h2>
							<div className="section_title size_v2_mod offset_v2_mod">{events[events.length - 1].title[langApp]}</div>
							<div className="section_descr offset_v2_mod">
								<p>{ReactHtmlParser(events[events.length - 1].excerpt[langApp])}</p>
								{events[events.length - 1].short_schedule.map((item) => {
									return (
										<p>{item.short_schedule_item[langApp]}</p>
									);
								})}
							</div>
							<Link className="btn_v4" to={`/event/${events[events.length - 1].ID}`}>{currentPageData.upcoming_event_btn_title[langApp]}</Link>
						</div>
					</div>
				</section>
			)}
			<section className="section">
				<div className="section_in">
					<h2 className="section_title decor_mod offset_mod">{ReactHtmlParser(APP_DATA.homePage.infoBlockArray.headTitle[langApp])}</h2>
					<div className="section_side width_v2_mod">
						<div className="section_row right_offset_mod">
							<div className="section_col info_text_mod">
								<h3 className="section_title size_v2_mod offset_v2_mod">{APP_DATA.homePage.infoBlockArray.title[langApp]}</h3>
								<div className="section_descr offset_v2_mod">
									{ReactHtmlParser(APP_DATA.homePage.infoBlockArray.text[langApp])}
								</div>
								<Link className="btn_v4" to={`/${APP_DATA.homePage.infoBlockArray.btnUrl}`}>{APP_DATA.homePage.infoBlockArray.btnTitle[langApp]}</Link>
							</div>
							<div className="section_col info_img_mod">
								<div className="img_holder">
									<div className="img_holder_in mask_mod">
										<img className="img_holder_image" src={APP_DATA.homePage.infoBlockArray.img} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="section_in">
					<div className="section_side width_v4_mod">
						<h2 className="section_title decor_mod offset_v2_mod size_v2_mod">{APP_DATA.homePage.infoBlockBottomArray.title[langApp]}</h2>
						<div className="section_descr offset_mod">
							{ReactHtmlParser(APP_DATA.homePage.infoBlockBottomArray.text[langApp])}
						</div>
						<Link className="btn_v4" to={APP_DATA.homePage.infoBlockBottomArray.btnUrl}>{APP_DATA.homePage.infoBlockBottomArray.btnTitle[langApp]}</Link>
					</div>
				</div>
			</section>
			{listBlockData && <ListBlock items={listBlockData.address} title={listBlockData.contacts_title[langApp]} />}
		</>
	);
};

export default HomePage;
