import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { getPathNameFromUrl } from 'utils';

// components
import { ReactComponent as IconArrowNext } from 'i/icons/arrow_next.svg';
import { JsonDataContext } from 'context/jsonData';

const SearchResult = ({
	id,
	subtype,
	title,
	type,
	url,
	excerpt,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const createPageUrlByType = () => {
		const preparedSubType = subtype.toLowerCase();

		if (preparedSubType === 'essay') {
			return `/essay/${id}`;
		}

		if (preparedSubType === 'event') {
			return `/event/${id}`;
		}

		if (preparedSubType === 'object') {
			return `/object/${id}`;
		}

		if (preparedSubType === 'historical') {
			return '/timeline';
		}

		if (preparedSubType === 'page') {
			const pathName = getPathNameFromUrl(url);

			return pathName;
		}

		return '/';
	};

	return (
		<Link className="search_result" to={createPageUrlByType()}>
			{/* <div className="search_result_icon v1_mod">
				<Icon className="icon icon-document_2 current_mod size_mod" />
			</div> */}
			<h2 className="search_result_title">{title}</h2>
			{excerpt && (
				<div className="search_result_descr">{ReactHtmlParser(excerpt)}</div>
			)}
			<div className="search_result_arrow">
				<IconArrowNext className="icon icon-arrow_next current_mod size_mod" />
			</div>
		</Link>
	);
};

export default SearchResult;
