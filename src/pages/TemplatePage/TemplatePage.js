import React, { useState, useEffect, useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import { getPageBySlug } from 'utils';

const TemplatePage = props => {
	const { pagesData, langApp } = useContext(JsonDataContext);
	const [currentPageData, setCurrentPageData] = useState(null);

	const getPageData = () => {
		const currentData = getPageBySlug(pagesData, props.match.params.slug);
		const preparedCurrentPageData = currentData[0].page_fields;

		setCurrentPageData(preparedCurrentPageData);
	};

	useEffect(() => {
		if (pagesData) {
			getPageData();
		}
	}, [pagesData]);

	return (
		currentPageData ? (
			<>
				{currentPageData.title && (
					<Helmet>
						<title>{currentPageData.title[langApp]}</title>
					</Helmet>
				)}
				<section className="section">
					<div className="section_in">
						<div className="essay">
							<div className="essay_col content_mod">
								<div className="essay_block">
									<div className="essay_head">
										<h2 className="section_title size_v2_mod limit_mod">{ReactHtmlParser(currentPageData.title[langApp])}</h2>
										{/* <div className="essay_date">{dateFormat(essayData.date, 'mediumDate')}</div> */}
									</div>
									<div className="essay_content_wrap">
										<div className="essay_content">
											{/* {ReactHtmlParser(currentPageData[langApp])} */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		) : null
	);
};

export default TemplatePage;
