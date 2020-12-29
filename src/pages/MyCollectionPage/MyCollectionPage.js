import React, { useEffect, useState } from 'react';

// components
import { SidebarMenu } from 'components/SidebarMenu';
import CollectionBlock from 'components/CollectionItemsList/CollectionBlock';
import { fetchCurrentUserCollections } from 'api/user';
import { Spinner } from 'components/Spinner';

// content
import { MY_COLLECTION_PAGE_ARRAY } from './page_array';

const MyCollectionPage = () => {
	const [loading, setLoading] = useState(-1);
	const [currentUserCollection, setCurrentUserCollection] = useState({});

	useEffect(() => {
		async function fn() {
			const fetchCurrentUserCollectionsResponse = await fetchCurrentUserCollections();
			if (fetchCurrentUserCollectionsResponse.status === 'SUCCESS') {
				setCurrentUserCollection(fetchCurrentUserCollectionsResponse.data);
				setLoading(0);
			}
		}
		setLoading(1);
		fn();
	}, []);

	return (
		<>
			<section className="section hero_v1_mod">
				<div className="section_in row_v1_mod">
					<div className="section_col side_mod">
						<SidebarMenu />
					</div>
					<div className="section_col content_mod">
						{loading !== 0 ? (
							<Spinner />
						) : Object.keys(currentUserCollection).length > 0 ? (
							<CollectionBlock data={currentUserCollection} />
						) : (
							<span style={{ fontSize: '1.6rem' }}>Please click the heart on items to save them.</span>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default MyCollectionPage;
