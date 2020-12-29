import React from 'react';

// component
import CollectionItem from './CollectionItem';

const CollectionItemsList = ({ items }) => {
	return (
		<>
			<div className="saved_object_list">
				{items && items.map((item) => {
					return <CollectionItem item={item} key={item.id} />;
				})}
			</div>
		</>
	);
};

export default CollectionItemsList;
