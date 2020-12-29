import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { ObjectDashboardHeroSection } from 'components/Sections';
import { NavBlock } from 'components/NavBlock';
import { Alert, useAlert } from 'components/Alert';
import { ExploreBlock } from 'components/ExploreBlock';
import { VisitBlock } from 'components/VisitBlock';
import { getSingleObject } from 'api/object';
import { Spinner } from 'components/Spinner';
import APP_DATA from 'utils/jsonAppData';

import { JsonDataContext } from 'context/jsonData';
// import { OBJECT_DASHBOARD_PAGE } from './constant';
// import { OBJECT_LIST_PAGE_ARRAY } from '../ObjectsListPage/page_array';

const ObjectDashboardPage = (props) => {
	const { langApp } = useContext(JsonDataContext);
	const [isObjectsLoading, setObjectsLoading] = useState(false);
	const [isFetchError, setFetchError] = useState(false);
	const [objectData, setObjectData] = useState(null);
	const [alert, showAlert, hideAlert] = useAlert();
	const [updateObject, setUpdateObject] = useState(false);

	const getPageDataById = async () => {
		try {
			setObjectsLoading(true);
			const res = await getSingleObject(props.match.params.slug);

			setObjectsLoading(false);
			setObjectData(res.data);
			setUpdateObject(false);
		} catch (err) {
			setObjectsLoading(false);
			showAlert(err.message, 'danger');
			setUpdateObject(false);
			setFetchError(true);
		}
	};

	useEffect(() => {
		if (updateObject) {
			getPageDataById();
		}
	}, [updateObject]);

	useEffect(() => {
		getPageDataById();
	}, []);

	return (
		<>
			{!isObjectsLoading && objectData ? (
				<>
					{objectData.title && (
						<Helmet>
							<title>{objectData.title[langApp]}</title>
						</Helmet>
					)}
					<ObjectDashboardHeroSection
						sectionData={objectData}
					/>
					<NavBlock
						navList={APP_DATA.objectDashboardPage.navigationList}
						navLinks={objectData.nav_links}
						setUpdatePage={setUpdateObject}
					/>
				</>
			) : (
				!isFetchError && (
					<Spinner />
				)
			)}
			<div className="section_in">
				{alert.visible && (
					<Alert
						alert={alert}
						hide={hideAlert}
					/>
				)}
			</div>
			<ExploreBlock
				title={APP_DATA.objectDashboardPage.exploreOtherViews.title[langApp]}
				exploreBlockData={APP_DATA.objectDashboardPage.exploreOtherViews}
				widthV3Mod
				leftOffsetMod
				rightOffsetMod
			/>
			<VisitBlock
				title={APP_DATA.virtualRoomSection.title[langApp]}
				buttonTitle={APP_DATA.virtualRoomSection.buttonTitle[langApp]}
				buttonUrl={APP_DATA.virtualRoomSection.buttonUrl[langApp]}
				img={APP_DATA.virtualRoomSection.img}
				widthV1Mod
				leftMod
			/>
		</>
	);
};

export default ObjectDashboardPage;
