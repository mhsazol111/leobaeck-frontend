import React, { useContext, useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { getPageBySlug } from 'utils';
import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';

// components
import AboutHeroSection from 'components/Sections/AboutHeroSection';
import { Banner } from 'components/Banner';
import { EventsContentBlock } from 'components/EventsContentBlock';
import { ListBlock } from 'components/ListBlock';

const AboutPage = () => {
	const { langApp } = useContext(JsonDataContext);
	const { pagesData } = useContext(JsonDataContext);
	const { appBaseData } = useContext(JsonDataContext);
	const [currentPageData, setCurrentPageData] = useState(null);
	const [listBlockData, setListBlockData] = useState(null);

	const getPageData = () => {
		const currentData = getPageBySlug(pagesData, 'about');
		const preparedCurrentPageData = currentData[0].page_fields;

		setCurrentPageData(preparedCurrentPageData);
	};

	useEffect(() => {
		if (pagesData) {
			getPageData();
			if (document.body.classList[0] === '') {
				console.log(document.body.classList);
			}
		}
	}, [pagesData]);

	useEffect(() => {
		if (appBaseData) {
			setListBlockData(appBaseData);
		}
	}, [appBaseData]);

	function chunkArray(array, chunk) {
		const newArray = [];
		for (let i = 0; i < array.length; i += chunk) {
			newArray.push(array.slice(i, i + chunk));
		}
		return newArray;
	}

	let projectTextArray = [];

	if (currentPageData) {
		projectTextArray = chunkArray(currentPageData.project_text, currentPageData.project_text.length / 2);
	}

	return (
		currentPageData && (
			<>
				{currentPageData.title && (
					<Helmet>
						<title>{currentPageData.title[langApp]}</title>
					</Helmet>
				)}
				<AboutHeroSection
					title={currentPageData.title[langApp]}
					subtitle={currentPageData.subtitle[langApp]}
					img={currentPageData.featured_image}
					text={currentPageData.text[langApp]}
					colLeftText={currentPageData.col_left_text[langApp]}
					colRightText={currentPageData.col_right_text[langApp]}
				/>
				<section className="section">
					<div className="section_in">
						<div className="section_side width_v5_mod top_decor_mod">
							<div className="section_row right_offset_mod">
								<div className="section_col col_2_mod">
									<h2 className="section_title size_v2_mod">{currentPageData.project_title[langApp]}</h2>
								</div>
								<div className="section_col col_2_mod top_offset_mod">
									<div className="section_descr">{ ReactHtmlParser(currentPageData.project_subtitle[langApp])}</div>
								</div>
							</div>
							{projectTextArray[0] || projectTextArray[1] ? (
								<div className="section_row right_offset_mod">
									<div className="section_col col_2_mod">
										<ul className="shared_history_list">
											{projectTextArray[0] && projectTextArray[0].map((item) => {
												return <li className="shared_history_item" key={item.id}>{item[langApp]}</li>;
											})}
										</ul>
									</div>
									<div className="section_col col_2_mod">
										<ul className="shared_history_list">
											{projectTextArray[1] && projectTextArray[1].map((item) => {
												return <li className="shared_history_item" key={item.id}>{item[langApp]}</li>;
											})}
										</ul>
									</div>
								</div>
							) : null}
						</div>
					</div>
				</section>
				<section className="section">
					<div className="section_in">
						<div className="section_side width_v2_mod top_decor_mod">
							<div className="section_row right_offset_v2_mod">
								<div className="section_col col_2_mod">
									<div className="section_title size_v2_mod">{currentPageData.objects_title[langApp]}</div>
								</div>
								<div className="section_col col_2_mod top_offset_v2_mod">
									<div className="section_descr offset_v2_mod">
										{ ReactHtmlParser(currentPageData.objects_subtitle[langApp])}
									</div>
									<Link
										className="btn_v4"
										to={currentPageData.objects_button.link.url}
									>
										{currentPageData.objects_button.title[langApp]}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Banner
					bannerArray={APP_DATA.homePage.bannerArray}
					indentMod
					bgMod
					widthV2Mod
					rightMod
					wrapWidthV2Mod
					titleColV2Mod
					titleColorMod
					sizeV2Mod
					textColV2Mod
					textColTopOffsetMod
					descrColorMod
					descrOffsetMod
				/>
				<EventsContentBlock
					title={currentPageData.institute_title[langApp]}
					rowTitle={currentPageData.institute_subtitle[langApp]}
					descrCol1={currentPageData.institute_left_text[langApp]}
					descrCol2={currentPageData.institute_right_text[langApp]}
					btnTitle={currentPageData.institute_button.title[langApp]}
					btnUrl={currentPageData.institute_button.link.url}
				/>
				{listBlockData && <ListBlock items={listBlockData.address} title={listBlockData.contacts_title[langApp]} />}
			</>
		)
	);
};

export default AboutPage;
