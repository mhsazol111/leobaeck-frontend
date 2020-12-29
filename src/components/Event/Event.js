import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { AddToCalendarButton } from 'components/Buttons';

const Event = ({
	id,
	date,
	title,
	image,
	descr,
	schedule,
	registerInfo,
	registerBtnTitle,
	registerBtnLink,
	calendarTitle,
	calendarDescription,
	calendarLocation,
	calendarDate,
	lang,
}) => {
	console.log('date', date);
	return (
		<div className="event">
			<div className="section_row">
				<div className="section_col col_3_mod">
					<div className="event_date">{date.day}</div>
				</div>
				<div className="section_col col_4_mod">
					<div className="event_content">
						<div className="event_main">
							<Link className="event_title" to={`/event/${id}`}>{ReactHtmlParser(title)}</Link>
							{descr && <div className="event_descr">{ReactHtmlParser(descr)}</div>}
							<ul className="event_details">
								{schedule && schedule.map((item) => {
									return <li className="event_details_item" key={item.id}>{item.short_schedule_item[lang]}</li>;
								})}
							</ul>
							<div className="event_bottom">
								{ReactHtmlParser(registerInfo)}
								{calendarLocation}
							</div>
						</div>
						<div className="event_sidebar">
							<div className="event_img_wrap">
								<img className="event_img" src={image} alt="" />
							</div>
							<div className="event_button_list">
								<div className="event_button_item">
									<AddToCalendarButton
										eventTitle={title}
										buttonTitle={calendarTitle}
										calendarLocation={calendarLocation}
										calendarDescription={calendarDescription}
										calendarDate={calendarDate}
									/>
								</div>
								<div className="event_button_item">
									<a className="btn_v5 full_mod" target="_blank" rel="noreferrer" href={registerBtnLink}>{registerBtnTitle}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
