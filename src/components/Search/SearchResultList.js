import { JsonDataContext } from 'context/jsonData';
import React, { useContext } from 'react';
import { getType } from 'utils';
import SearchResult from './SearchResult';

const SearchResultList = ({
	result,
}) => {
	const { langApp } = useContext(JsonDataContext);

	console.log('result', result);

	return (
		<div className="search_result_w">
			<ul className="search_result_list">
				{result.map(({
					id,
					subtype,
					title,
					excerpt,
					type,
					url,
				}) => {
					const preparedTitleValue = getType(title) === 'Object' ? title[langApp] : title;
					return (
						<li className="search_result_list_item" key={id}>
							<SearchResult
								id={id}
								subtype={subtype}
								title={preparedTitleValue}
								type={type}
								url={url}
								excerpt={excerpt[langApp]}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SearchResultList;
