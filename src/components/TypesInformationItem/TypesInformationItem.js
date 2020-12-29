import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';

const TypesInformationItem = ({ itemData, v2Mod }) => {
	const { title, content } = itemData;
	const typesItemClasses = classNames('types_information_item', {
		v2_mod: v2Mod,
	});

	return (
		<div className={typesItemClasses}>
			<h3 className="types_information_item_title">{title}</h3>
			<div className="section_descr">{ReactHtmlParser(content)}</div>
		</div>
	);
};

export default TypesInformationItem;
