/* eslint-disable */
import React, {useRef, useContext, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getTimelinePageData } from 'api/data';
// import { Filters } from 'components/Filters';
import { sortByYear, getPageBySlug } from 'utils';
import { Spinner } from 'components/Spinner';
import {
	TimelineHistoricalItem,
	TimelineEssayItem,
	TimelineObjectItem,
} from 'components/TimelineItems';

import { JsonDataContext } from 'context/jsonData';
import { AnimationContext } from 'context/animation';

gsap.registerPlugin(ScrollTrigger);

const TimelinePage = () => {
	const {
		langApp,
		showPopupByKey,
		setObjectPopupData,
		pagesData,
		epochsPageData,
		setEpochsPageData,
	} = useContext(JsonDataContext);

	const {
		windowWidth,
		windowHeight,
		footerEl,
		footerHeight,
		setFooterHeight,
		footerTop,
		setFooterTop,
		scrollCheckActive,
		setScrollCheckActive,
		pageScrollTop,
	} = useContext(AnimationContext);

	const [allTimelineData, setTimelineData] = useState(false);
	const [filteredTimelineData, setFilteredTimelineData] = useState(false);
	const [isTimelineLoaded, setTimelineLoaded] = useState(false);
	const [isFetchError, setFetchError] = useState(false);

	const [localScrollOld, setLocalScrollOld] = useState(false);

	const scroller = useRef(null);
	const trigger = useRef(null);
	const timeline = useRef(null);

	const { hash } = useLocation();
	const [targetHash, setTargetHash] = useState(null);
	const history = useHistory();

	useEffect(() => {
		if (hash !== '' && isTimelineLoaded) {
			setTargetHash(hash);
			history.push('/timeline');
		}
	}, [
		hash,
		isTimelineLoaded,
	]);

	useEffect(() => {
		if (targetHash) {
			const targetObject = document.getElementById(`timeline-item-${targetHash.split('#')[1]}`);
			const distance = targetObject.offsetLeft;
			window.scrollBy(0, distance);
			targetObject.click();
		}
	}, [
		targetHash,
	]);

	const getPageData = () => {
		const currentData = getPageBySlug(pagesData, 'epochs');
		const preparedCurrentPageData = currentData[0].page_fields;

		setEpochsPageData(preparedCurrentPageData);
	};

	useEffect(() => {
		if (pagesData && !epochsPageData) {
			getPageData();
		}
	}, [pagesData]);

	const sortTimelineByYear = data => {
		const sortedTimelineData = sortByYear(data);

		setFilteredTimelineData(sortedTimelineData);
	};

	const fetchTimelineData = async () => {
		try {
			const res = await getTimelinePageData();

			setTimelineData(res.data);
			sortTimelineByYear(res.data);
			setTimelineLoaded(true);
		} catch (err) {
			setTimelineLoaded(false);
			setFetchError(true);
		}
	};

	const handleOpenPopup = (id, type, status) => {
		setObjectPopupData({
			id,
			type,
			status,
		});
		showPopupByKey('object');
	};

	useEffect(() => {
		fetchTimelineData();
	}, []);

	useEffect(() => {
		if (isTimelineLoaded && footerEl.current) {

			setScrollCheckActive(true);
			const $width = timeline.current.offsetWidth;
			const $footer_track = footerHeight + footerTop - windowHeight;

			gsap.set(trigger.current, {height:$width + $footer_track});

			const testfooter = document.querySelectorAll('.footer');
			const $scrollHeight = document.body.scrollHeight;
			let scroll_old = false;

			let track = (pageScrollTop - $width + windowHeight) * -1;
					console.log('pageScrollTop', pageScrollTop, '$width',$width, 'track', track, windowHeight ,$footer_track);
			if($width - windowHeight < pageScrollTop) {
				if (track > -$footer_track) {
					gsap.set(timeline.current, { y: track });
					gsap.set(footerEl.current, { y: track });
				}else {

				}
			} else {
				gsap.set(timeline.current,{x: - pageScrollTop, y:0 })
				gsap.set(footerEl.current,{y:0 })
			}

			setFooterHeight(footerEl.current.offsetHeight)
			setFooterTop(footerEl.current.offsetTop)

			console.log('footerEl',
				windowWidth,
				windowHeight,
				footerEl,
				footerHeight,
				footerTop,
				scrollCheckActive,
				pageScrollTop, );


		}
	}, [isTimelineLoaded, scrollCheckActive, pageScrollTop, windowWidth]);


	console.log('filtered data', filteredTimelineData);

	return (
		<section className="section hero_v1_mod no_bottom_offset_mod timeline_mod">
			{/* <div className="section_in timeline_mod">
				<Filters
					allObjects={allTimelineData}
					allFilteredObjects={filteredTimelineData}
					setAllFilteredObjects={setFilteredTimelineData}
				/>
			</div> */}
			{isTimelineLoaded ? (
				<div className="section_in timeline_mod">
					<div className="spacer_block" ref={trigger}/>
					<div className="timeline_list_wrap" ref={timeline}>
						<div className="timeline_list">
							{/*{epochsPageData && epochsPageData.epoch_excerpts[0] ? (*/}
							{/*	<TimelineEssayItem*/}
							{/*		type="essay"*/}
							{/*		title={epochsPageData.epoch_excerpts[0].title[langApp]}*/}
							{/*		text={epochsPageData.epoch_excerpts[0].body[langApp]}*/}
							{/*		lgMod*/}
							{/*	/>*/}
							{/*) : null}*/}
							{filteredTimelineData.map(({
								id,
								type,
								year,
								year_text: yearText,
								title,
								description,
								image,
								status,
							}) => {
								const preparedTypeValue = type.toLowerCase();
								const yearTextSafe = {
									en: 'not filled',
									de: 'not filled',
								};

								const preparedYearValue = !yearText ? yearTextSafe[langApp] : yearText[langApp];

								if (year && preparedTypeValue === 'historical' && image) {
									return (
										<TimelineHistoricalItem
											id={id}
											type="historical"
											title={preparedYearValue}
											img={image}
											text={description[langApp]}
											onClick={() => handleOpenPopup(id, preparedTypeValue, status)}
										/>
									);
								} else {
									// console.log('bug historical', id,
									// 	type,
									// 	year,
									// 	yearText,
									// 	title,
									// 	description,
									// 	image);
								}

								if (year && preparedTypeValue === 'object' && image) {
									return (
										<TimelineObjectItem
											id={id}
											type="object"
											title={preparedYearValue}
											img={image}
											text={description[langApp]}
											onClick={() => handleOpenPopup(id, preparedTypeValue, status)}
										/>
									);
								} else {
									// console.log('bug object', id,
									// 	type,
									// 	year,
									// 	yearText,
									// 	title,
									// 	description,
									// 	image);
								}

								if (year && preparedTypeValue !== 'object' && preparedTypeValue !== 'historical') {
									return (
										<TimelineEssayItem
											id={id}
											type="essay"
											title={title[langApp]}
											text={description[langApp]}
										/>
									);
								}

								return null;
							})}
						</div>
					</div>
				</div>
			) : (
				!isFetchError && (
					<Spinner />
				)
			)}
		</section>
	);
};

export default TimelinePage;
/* eslint-disable */
