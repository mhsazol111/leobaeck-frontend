import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { JsonDataContext } from 'context/jsonData';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';

// content
import { POPUP_ARRAY } from './page_array';

const PopupCalendar = ({ isOpen }) => {
	const { langApp, showPopupByKey, googleCalendarLink } = useContext(JsonDataContext);

	const handleClosePopup = () => {
		showPopupByKey();
	};

	return (
		<CSSTransition
			in={isOpen}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames="popup"
			mountOnEnter
			unmountOnExit
		>
			<div className="popup popupCalendar">
				<div className="overlay" />
				<div className="popup_in v3_mod">
					<button className="popup_close" type="button" onClick={handleClosePopup}>
						<IconClose className="icon icon-close_2 size_mod" />
					</button>
					<div className="popup_content">
						<div className="popup_links">
							<a className="popup_link" href={googleCalendarLink} target="_blank" rel="noreferrer">Google Calendar</a>
							{/* <a className="popup_link" href={googleCalendarLink} target="_blank" rel="noreferrer">iCal</a> */}
							{/* <a className="popup_link" href={googleCalendarLink} target="_blank" rel="noreferrer">Outlook Calendar</a> */}
							{/* {POPUP_ARRAY.calendar.list.map((item) => {
								return <a className="popup_link" href="#">{item}</a>;
							})} */}
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>

	);
};

export default PopupCalendar;
