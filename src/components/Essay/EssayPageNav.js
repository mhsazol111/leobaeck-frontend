import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import EssayMenuButton from './EssayMenuButton';

const EssayPageNav = ({
	navList,
	navLinks,
	objectId,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { prev_page: prevPageId, next_page: nextPageId } = navLinks;

	return (
		<ul className="essay_menu">
			<li className="essay_menu_item">
				<EssayMenuButton
					title={navList[0].title[langApp]}
					url={objectId ? navList[0].url + objectId : navList[0].url}
				/>
			</li>
			{/* {prevPageId && (
				<li className="essay_menu_item">
					<EssayMenuButton
						title={navList[1].title[langApp]}
						url={`${navList[1].url + prevPageId}`}
					/>
				</li>
			)}
			{nextPageId && (
				<li className="essay_menu_item">
					<EssayMenuButton
						title={navList[2].title[langApp]}
						url={`${navList[2].url + nextPageId}`}
					/>
				</li>
			)} */}
		</ul>
	);
};

export default EssayPageNav;
