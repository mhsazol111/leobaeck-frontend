/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PreviewList } from 'components/PreviewList';
import { JsonDataContext } from 'context/jsonData';

const UpcomingObjects = ({
	title,
	buttonTitle,
}) => {
	const { upcomingObjects } = useContext(JsonDataContext);

	return (
		<div className="preview_wrap">
			<h2 className="section_title decor_mod size_v2_mod offset_v2_mod">{title}</h2>
			{upcomingObjects && (
				<div className="preview_items_wrap">
					<PreviewList listItems={upcomingObjects} col2Mod v2Mod />
				</div>
			)}
			<Link className="btn_v4" to="/objects-list">{buttonTitle}</Link>
		</div>
	);
};

export default UpcomingObjects;
/* eslint-disable */
