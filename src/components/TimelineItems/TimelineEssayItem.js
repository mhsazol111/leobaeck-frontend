import { JsonDataContext } from 'context/jsonData';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';

import APP_DATA from 'utils/jsonAppData';

const TimelineEssayItem = ({
	id,
	title,
	text,
	type,
	lgMod,
}) => {
	const { langApp } = useContext(JsonDataContext);

	const timelineItemClasses = classNames('timeline_item v2_mod lg_mod', {
		lg_mod: lgMod,
	});

	return (
		<div id={`timeline-item-${id}`} className={timelineItemClasses}>
			<div className="timeline_content">
				<div className="timeline_item_type">{type}</div>
				<div className="timeline_title">{ReactHtmlParser(title)}</div>
				<div className="timeline_text">{ReactHtmlParser(text)}</div>
				<div className="btn_wrap">
					<Link className="btn_v5" to={`/essay/${id}`}>
						{APP_DATA.timelinePage.buttonReadEssayTitle[langApp]}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TimelineEssayItem;
