import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import { ReactComponent as IconDoc } from 'i/icons/document_2.svg';
import { ReactComponent as IconDoc2 } from 'i/icons/document_4.svg';
import { JsonDataContext } from 'context/jsonData';
import { checkAuthorName } from 'utils';

const EssayLinks = ({
	linkList,
	offsetMod,
	pageSlug,
	setUpdatePage,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const essayClasses = classNames('essay_links', {
		offset_mod: offsetMod,
	});

	const handleOnClick = (e) => {
		if (setUpdatePage) {
			setUpdatePage(true);
		}
	};

	return (
		<ul className={essayClasses}>
			{linkList.length && linkList.map(({
				id,
				type,
				title,
				author,
			}) => {
				const essayLinkClass = pageSlug && parseInt(pageSlug) === id ? 'active_mod' : '';
				return (
					<li className="essay_links_item">
						<Link
							className={`essay_link ${essayLinkClass}`}
							to={`/essay/${id}`}
							onClick={handleOnClick}
						>
							<div className="essay_link_icon">
								{(type === 'Discover')
									? <IconDoc2 className="icon icon-document_4 size_mod" />
									: (
										<IconDoc className="icon icon-document_2 size_mod" />
									)}
							</div>
							<div className="essay_link_content">
								{type && (
									<div className="essay_link_type">{type}</div>
								)}
								{title && (
									<h3 className="essay_link_title offset_mod">{ReactHtmlParser(title[langApp])}</h3>
								)}
								{author && checkAuthorName(author) && (
									<div className="essay_link_type">{author[langApp]}</div>
								)}
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default EssayLinks;
