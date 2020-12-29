import React from 'react';
import { toTitleCase } from 'utils';

// components
import CollectionItemsList from './CollectionItemsList';

const CollectionBlock = ({ data }) => {
	return (
		<>
			{data && Object.keys(data).map((postType) => {
				return (
					<div className="section_col_block" key={postType}>
						<h2 className="section_title decor_v3_mod size_v2_mod offset_v4_mod">{toTitleCase(data[postType].title)}</h2>
						<CollectionItemsList items={data[postType].items} />
					</div>
				);
			})}
		</>
	);
};

export default CollectionBlock;
