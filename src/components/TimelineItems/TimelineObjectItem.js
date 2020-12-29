import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import PlaceholderImage from 'i/placeholder-image.png';

const TimelineObjectItem = ({
	id,
	title,
	img,
	text,
	type,
	onClick,
}) => {
	return (
		<button id={`timeline-item-${id}`} className="timeline_item object_mod" onClick={onClick} type="button">
			<div className="timeline_item_type">{type}</div>
			<div className="timeline_item_title">{title}</div>
			<div className="timeline_item_img_block">
				<div className="timeline_item_img_wrap">
					{img ? (
						<img className="section_img contain_mod" src={img} alt={title} />
					) : (
						<img className="section_img contain_mod" src={PlaceholderImage} alt="not found" />
					)}
				</div>
			</div>
			<div className="timeline_item_text">{ReactHtmlParser(text)}</div>
		</button>
	);
};

export default TimelineObjectItem;
