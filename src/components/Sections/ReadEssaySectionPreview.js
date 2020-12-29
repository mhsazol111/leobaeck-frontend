import React, { useContext, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getPageBySlug } from 'utils';
import { JsonDataContext } from 'context/jsonData';
import { Link } from 'react-router-dom';
import APP_DATA from 'utils/jsonAppData';

const ReadEssaySectionPreview = () => {
	const { pagesData, epochsPageData, setEpochsPageData } = useContext(JsonDataContext);
	const { langApp } = useContext(JsonDataContext);

	const getPageData = () => {
		const currentData = getPageBySlug(pagesData, 'epochs');
		const preparedCurrentPageData = currentData[0].page_fields;

		setEpochsPageData(preparedCurrentPageData);
	};

	useEffect(() => {
		if (pagesData && !epochsPageData) {
			getPageData();
		}
	}, [pagesData]);

	return (
		epochsPageData && epochsPageData.epoch_excerpts[0] && (
			<>
				<div className="section_title decor_v2_mod size_v2_mod offset_v2_mod color_v2_mod">{epochsPageData.epoch_excerpts[0].title[langApp]}</div>
				<div className="collection_descr_row">
					<div className="collection_descr">
						{ReactHtmlParser(epochsPageData.epoch_excerpts[0].body[langApp])}
					</div>
					<Link
						className="btn_v5"
						// to={`essay/${acf.object_essays[0].essay_link.ID}`}
						to="#"
					>
						{APP_DATA.objectPopup.readEssaysButton[langApp]}
					</Link>
					{/* <div className="btn_v4" href={APP_DATA.objectsListPage.collection.btnUrl}>{APP_DATA.objectsListPage.collection.btnTitle[langApp]}</div> */}
				</div>
			</>
		)
	);
};

export default ReadEssaySectionPreview;
