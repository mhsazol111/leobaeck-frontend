import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import classNames from 'classnames';

import PreviewItem from './PreviewItem';

const PreviewList = ({
	listItems,
	col2Mod,
}) => {
	const { langApp } = useContext(JsonDataContext);

	const itemClasses = classNames('preview_list_item', {
		v2_mod: col2Mod,
	});

	return (
		<ul className="preview_list">
			{listItems.map(({
				ID,
				title,
				publish_date: date,
				text,
				status,
				object_info: objectInfo,
				object_number: objectNumber,
				object_image: objectImage,
				starred,
			}, index) => {
				return (
					<li className={itemClasses} key={index}>
						<PreviewItem
							id={ID}
							title={title[langApp]}
							date={date}
							text={text}
							status={status}
							infoList={objectInfo}
							objectImage={objectImage}
							objectNumber={objectNumber[langApp]}
							starred={starred}
							// photos={acf.photos}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default PreviewList;
