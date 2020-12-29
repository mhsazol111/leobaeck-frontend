import React, { useContext } from 'react';

// components
// import { Filters } from 'components/Filters';

// content
import { Banner } from 'components/Banner';
import APP_DATA from 'utils/jsonAppData';
import { JsonDataContext } from 'context/jsonData';
import { ExploreBlock } from 'components/ExploreBlock';
import { ObjectListPageHeroSection, ReadEssaySectionPreview } from 'components/Sections';
import { CollectionListContainer } from 'components/CollectionList';
import { OBJECT_LIST_PAGE_ARRAY } from './page_array';

const ObjectsListPage = () => {
	const { langApp } = useContext(JsonDataContext);
	const { allFilteredObjects, setAllFilteredObjects, allObjects } = useContext(JsonDataContext);
	return (
		<>
			<ObjectListPageHeroSection />
			<section className="section">
				<div className="section_in">
					<div className="section_side width_v1_mod offset_mod">
						<div className="section_title decor_mod offset_mod">{APP_DATA.objectsListPage.collection.title[langApp]}</div>
						{/* <Filters
							collectionFilter
							allObjects={allObjects}
							allFilteredObjects={allFilteredObjects}
							setAllFilteredObjects={setAllFilteredObjects}
						/> */}
					</div>
					<ReadEssaySectionPreview />
					<div className="section_side width_v2_mod">
						<CollectionListContainer />
					</div>
				</div>
			</section>
			{/* TODO : fix banner */}
			<Banner
				bannerArray={APP_DATA.objectsListPage.bannerArray}
				indentMod
				bgMod
				widthV2Mod
				rightMod
				wrapWidthV2Mod
				titleColV2Mod
				titleColorMod
				sizeV2Mod
				limitV2Mod
				textColV2Mod
				descrColorMod
				descrOffsetMod
				bottomDescrColorMod
				bottomDescrOffsetMod
			/>
			<ExploreBlock
				title={APP_DATA.objectDashboardPage.exploreOtherViews.title[langApp]}
				exploreBlockData={APP_DATA.objectDashboardPage.exploreOtherViews}
				widthV3Mod
				leftMod
				leftOffsetMod
				rightOffsetMod
			/>
		</>
	);
};

export default ObjectsListPage;
