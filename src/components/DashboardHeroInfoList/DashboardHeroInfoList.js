import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as DocumentIcon } from 'i/icons/document_2.svg';
import { JsonDataContext } from 'context/jsonData';

const DashboardHeroInfoList = ({
	infoList,
}) => {
	const { langApp } = useContext(JsonDataContext);
	return (
		<ul className="dashboard_hero_info_list">
			{infoList && infoList.map(({
				id,
				author,
				title,
			}, index) => {
				return (
					<li className="dashboard_hero_info_item" key={index}>
						<div className="dashboard_hero_info_icon">
							<DocumentIcon className="icon size_mod" />
						</div>
						{/* <div className="dashboard_hero_info_descr">{type}</div> */}
						<Link className="dashboard_hero_info_title" to={`/essay/${id}`}>{title[langApp]}</Link>
						{
							author[langApp] && author[langApp] !== '' && (
								<p className="dashboard_hero_info_author">
									{`By ${author[langApp]}`}
								</p>
							)
						}
					</li>
				);
			})}
		</ul>
	);
};

export default DashboardHeroInfoList;
