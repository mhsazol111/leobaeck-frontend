import React, { useContext } from 'react';
import { spliceSplit } from 'utils';
import { JsonDataContext } from 'context/jsonData';

const AddToCalendarButton = ({
	eventTitle,
	buttonTitle,
	calendarLocation,
	calendarDescription,
	calendarDate,
}) => {
	const startDateTime = spliceSplit(calendarDate.start_date_time, 8, 0, 'T');
	const endDateTime = spliceSplit(calendarDate.end_date_time, 8, 0, 'T');
	const calendarLink = `https://calendar.google.com/calendar/r/eventedit?text=${eventTitle}&dates=${startDateTime}Z/${endDateTime}Z&details=${calendarDescription}&location=${calendarLocation}/`.replace(/\s/g, '+');

	const { langApp, showPopupByKey, setGoogleCalendarLink } = useContext(JsonDataContext);

	const handleOpenPopup = () => {
		showPopupByKey('calendar');
		setGoogleCalendarLink(calendarLink);
	};

	return (
		<button
			type="button"
			className="btn_v4 full_mod"
			onClick={handleOpenPopup}
		>
			{buttonTitle}
		</button>
	);
};

export default AddToCalendarButton;
