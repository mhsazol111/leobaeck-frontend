import React, { useState, useEffect, useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';

// components
import { NavBlock } from 'components/NavBlock';
import { Alert, useAlert } from 'components/Alert';
import { Spinner } from 'components/Spinner';
import { getAllEvents, getSingleEvent } from 'api/event';
import { filterEventsById } from 'utils';
import { JsonDataContext } from 'context/jsonData';
import { AddToCalendarButton } from 'components/Buttons';

// content
import { EVENT_ARRAY, NAV_ITEMS } from './constant';

const EventPage = props => {
	const { langApp, allEvents, setAllEvents } = useContext(JsonDataContext);
	const [isEventLoading, setEventLoading] = useState(false);
	const [pageData, setPageData] = useState(null);
	const [alert, showAlert, hideAlert] = useAlert();
	const [updateEvent, setUpdateEvent] = useState(false);
	let addToCalendarData;

	const getPageDataById = async () => {
		try {
			setEventLoading(true);
			let preparedAllEvents = allEvents;

			if (!preparedAllEvents) {
				const res = await getAllEvents();

				// setPageData(res.data[0]);
				setAllEvents(res.data);
				preparedAllEvents = res.data;
			}

			const filteredEvent = filterEventsById(preparedAllEvents, props.match.params.slug);

			setPageData(filteredEvent);
			setEventLoading(false);
			setUpdateEvent(false);
		} catch (err) {
			setEventLoading(false);
			showAlert(err.message);
			setUpdateEvent(false);
		}
	};

	useEffect(() => {
		if (updateEvent) {
			getPageDataById();
		}
	}, [updateEvent]);

	useEffect(() => {
		getPageDataById();
	}, []);

	if (pageData) {
		addToCalendarData = pageData.add_to_calendar;
	}

	return (
		!isEventLoading && pageData ? (
			<>
				<section className="section">
					<div className="section_in">
						<div className="section_side width_v2_mod offset_mod">
							<div className="event_info">
								<div className="event_info_content">
									<h2 className="section_title offset_v2_mod">{pageData.title[langApp]}</h2>
									<div className="event_info_type">{pageData.subtitle[langApp]}</div>
									<div className="event_info_schedule">
										{pageData.schedule && pageData.schedule.map((date) => {
											return (
												<div className="event_info_schedule_item" key={date.id}>
													{date.day}
													&nbsp;
													{date.time}
												</div>
											);
										})}
									</div>
									<div className="event_info_buttons">
										<div className="event_button_item">
											<AddToCalendarButton
												eventTitle={pageData.title[langApp]}
												buttonTitle={addToCalendarData.title[langApp]}
												calendarLocation={addToCalendarData.location.address}
												calendarDescription={addToCalendarData.description[langApp]}
												calendarDate={addToCalendarData.date}
											/>
										</div>
										<div className="event_button_item">
											<a className="btn_v5 full_mod" target="_blank" rel="noreferrer" href={pageData.register_btn.link}>{pageData.register_btn.title[langApp]}</a>
										</div>
									</div>
								</div>
								<div className="event_info_img_wrap">
									<img className="event_info_img" src={pageData.image} alt="" />
								</div>
							</div>
						</div>
						<div className="section_side width_v6_mod">
							<h2 className="section_title size_v2_mod decor_mod offset_v4_mod">{pageData.information_title[langApp]}</h2>
							<div className="event_info_text">
								{ReactHtmlParser(pageData.information_text[langApp])}
							</div>
							<div className="event_info_bottom">
								<div className="event_info_btn">
									<a className="btn_v5" href={pageData.register_btn.link}>{pageData.register_btn.title[langApp]}</a>
								</div>
								<div className="event_info_bottom_text">
									{ReactHtmlParser(pageData.register_info[langApp])}
								</div>
							</div>
						</div>
					</div>
				</section>
				<NavBlock
					navList={NAV_ITEMS}
					navLinks={pageData.nav_links}
					setUpdatePage={setUpdateEvent}
				/>
			</>
		) : (
			<Spinner />
		)
	);
};

export default EventPage;
