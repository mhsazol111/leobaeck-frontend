import { JsonDataContext } from 'context/jsonData';
import React, { useContext } from 'react';

import NavBlockItem from './NavBlockItem';

const NavBlock = ({
	navList,
	navLinks,
	objectId,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { prev_page: prevPageId, next_page: nextPageId } = navLinks;

	return (
		<section className="section no_top_offset_mod">
			<div className="section_in">
				<div className="nav_block">
					<div className="nav_block_row">
						<NavBlockItem
							title={navList[0].title[langApp]}
							url={objectId ? navList[0].url + objectId : navList[0].url}
						/>
					</div>
					{/* { (prevPageId || nextPageId) && (
						<div className="nav_block_row">
							{prevPageId && (
								<NavBlockItem
									title={navList[1].title[langApp]}
									url={`${navList[1].url + prevPageId}`}
									setUpdatePage={setUpdatePage}
								/>
							)}
							{nextPageId && (
								<NavBlockItem
									title={navList[2].title[langApp]}
									url={`${navList[2].url + nextPageId}`}
									setUpdatePage={setUpdatePage}
									nextArrow
								/>
							)}
						</div>
					)} */}
				</div>
			</div>
		</section>
	);
};

export default NavBlock;
