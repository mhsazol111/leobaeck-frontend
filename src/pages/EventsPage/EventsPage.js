import React, { useContext, useEffect, useState } from 'react';

import { JsonDataContext } from 'context/jsonData';
import { getAllEvents } from 'api/event';

// components
import { Banner } from 'components/Banner';
import { ListBlock } from 'components/ListBlock';
import { EventsContentBlock } from 'components/EventsContentBlock';
import { Event } from 'components/Event';
import { Alert, useAlert } from 'components/Alert';
import { Spinner } from 'components/Spinner';
import APP_DATA from 'utils/jsonAppData';
import { getPageBySlug } from 'utils';
import { EVENTS_ARRAY } from './page_array';

const EventsPage = () => {
	const { allEvents, setAllEvents } = useContext(JsonDataContext);
	const [isEventsLoaded, setEventsLoaded] = useState(false);
	const [isFetchError, setFetchError] = useState(false);
	const { langApp } = useContext(JsonDataContext);
	const [alert, showAlert, hideAlert] = useAlert();

	const { appBaseData } = useContext(JsonDataContext);
	const [listBlockData, setListBlockData] = useState(null);

	const fetchAllEvents = async () => {
		try {
			if (!allEvents) {
				const res = await getAllEvents();

				setAllEvents(res.data);
			}

			setEventsLoaded(true);
		} catch (err) {
			showAlert(err.message, 'danger');
			setEventsLoaded(false);
			setFetchError(true);
		}
	};

	useEffect(() => {
		fetchAllEvents();
		if (appBaseData) {
			setListBlockData(appBaseData);
		}
	}, [appBaseData]);

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="section_row">
						<div className="section_col col_3_mod" />
						<div className="section_col col_4_mod">
							<h2 className="section_title decor_mod offset_mod">{APP_DATA.eventsPage.title[langApp]}</h2>
						</div>
					</div>
					<div className="events_list">
						{isEventsLoaded ? (
							allEvents.map(({
								ID,
								title,
								excerpt,
								image,
								information_text,
								register_info,
								add_to_calendar,
								register_btn,
								schedule,
								short_schedule,
							}) => {
								return (
									<Event
										key={ID}
										id={ID}
										title={title[langApp]}
										descr={excerpt && excerpt[langApp]}
										image={image}
										registerInfo={register_info[langApp]}
										registerBtnTitle={register_btn.title[langApp]}
										registerBtnLink={register_btn.link}
										calendarTitle={add_to_calendar.title[langApp]}
										calendarDescription={add_to_calendar.description[langApp]}
										calendarLocation={add_to_calendar.location.address}
										calendarDate={add_to_calendar.date}
										date={schedule[0]}
										schedule={short_schedule}
										lang={langApp}
									/>
								);
							})
						) : (
							!isFetchError && (
								<Spinner limitColMod />
							)
						)}
					</div>
					{alert.visible ? (
						<Alert
							alert={alert}
							hide={hideAlert}
							limitColMod
						/>
					) : null}
				</div>
			</section>
			{/* TODO : fix banner */}
			<Banner
				bannerArray={APP_DATA.eventsPage.bannerArray}
				indentMod
				bgMod
				widthV2Mod
				rightMod
				wrapWidthV2Mod
				titleColV2Mod
				titleColorMod
				sizeV2Mod
				limitV2Mod
				textColV2Mod
				descrColorMod
				descrOffsetMod
				bottomDescrColorMod
				bottomDescrOffsetMod
			/>
			<EventsContentBlock
				title={APP_DATA.eventsPage.institute.institute_title[langApp]}
				rowTitle={APP_DATA.eventsPage.institute.institute_subtitle[langApp]}
				descrCol1={APP_DATA.eventsPage.institute.institute_left_text[langApp]}
				descrCol2={APP_DATA.eventsPage.institute.institute_right_text[langApp]}
				btnTitle={APP_DATA.eventsPage.institute.institute_button.title[langApp]}
				btnUrl={APP_DATA.eventsPage.institute.institute_button.link.url}
			/>
			{listBlockData && <ListBlock items={listBlockData.address} title={listBlockData.contacts_title[langApp]} />}
		</>
	);
};

export default EventsPage;
