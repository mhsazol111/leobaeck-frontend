import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { FutureObjectDashboardHeroSection } from 'components/Sections';
import { Alert, useAlert } from 'components/Alert';
import { ExploreBlock } from 'components/ExploreBlock';
import { VisitBlock } from 'components/VisitBlock';
import { getAllFutureObjects, getSingleObject } from 'api/object';
import { Spinner } from 'components/Spinner';

import APP_DATA from 'utils/jsonAppData';
import { JsonDataContext } from 'context/jsonData';

const FutureObjectDashboardPage = (props) => {
	const { langApp } = useContext(JsonDataContext);
	const [isObjectsLoading, setObjectsLoading] = useState(false);
	const [isFetchError, setFetchError] = useState(false);
	const [objectData, setObjectData] = useState(null);
	const [alert, showAlert, hideAlert] = useAlert();
	const [updateObject, setUpdateObject] = useState(false);

	const history = useHistory();

	const getObjectById = resObjects => {
		const futureObject = resObjects.filter(({
			id,
		}) => {
			if (id === parseInt(props.match.params.slug)) return true;

			return false;
		});

		return futureObject[0];
	};

	const getPageDataById = async () => {
		try {
			setObjectsLoading(true);
			const res = await getAllFutureObjects();

			const futureObject = getObjectById(res.data);

			if (!futureObject) {
				try {
					const fetchRes = await getSingleObject(props.match.params.slug);

					if (fetchRes.data) {
						history.push(`/object/${props.match.params.slug}`);
					}
				} catch (err) {
					showAlert(err.message, 'danger');
					setUpdateObject(false);
					setObjectsLoading(false);
					setFetchError(true);
				}
			}

			// setObjectsLoading(false);
			// setUpdateObject(false);
			// setObjectData(futureObject);
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
					<FutureObjectDashboardHeroSection
						sectionData={objectData}
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

export default FutureObjectDashboardPage;
