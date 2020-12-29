import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { ReactComponent as DocumentIcon2 } from 'i/icons/document_2.svg';
import { JsonDataContext } from 'context/jsonData';

const EssayEpochList = ({
	listItems,
	pageSlugId,
}) => {
	const { langApp } = useContext(JsonDataContext);
	console.log(listItems[0]);
	// listItems.map(listItems.pop, [...listItems]);
	const arr = [];

	for (let i = listItems.length - 1; i >= 0; i -= 1) {
		arr.push(listItems[i]);
	}
	// console.log(arr);

	return (
		<ul className="essay_epoch_list">
			{listItems && arr.map((item, index) => {
				const { id, title } = item;
				const linkClasses = parseInt(pageSlugId) === id ? 'active_mod' : '';
				return (
					<li className="essay_epoch_list_item" key={index}>
						<Link to={`/essay/${id}`} className={`essay_epoch_list_link ${linkClasses}`}>
							<span className="link_icon_w">
								<DocumentIcon2 className="icon icon-document_4 size_mod" />
							</span>
							{ReactHtmlParser(title[langApp])}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default EssayEpochList;
