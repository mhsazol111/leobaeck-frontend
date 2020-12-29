import React, { useContext, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { JsonDataContext } from 'context/jsonData';
import { Spinner } from 'components/Spinner';
import { Alert, useAlert } from 'components/Alert';
import {
	getSingleObject,
	getSingleHistoricalObject,
	getAllFutureObjects,
} from 'api/object';
import PopupObjectItem from './PopupObjectItem';
import PopupHistoricalObjectItem from './PopupHistoricalObjectItem';
import PopupCloseBtn from './PopupCloseBtn';

const PopupObject = ({
	isOpen,
	isTimelinePage,
}) => {
	const { showPopupByKey, objectPopupData } = useContext(JsonDataContext);
	const [isObjectsLoading, setObjectsLoading] = useState(false);
	const [isFetchError, setFetchError] = useState(false);
	const [alert, showAlert, hideAlert] = useAlert();
	const [objectData, setObjectData] = useState(false);

	const fetchObjectById = async () => {
		setFetchError(false);
		if (alert.visible) {
			hideAlert();
		}

		try {
			setObjectsLoading(true);
			let fetchRes;

			const { type, status, id } = objectPopupData;

			if (type === 'historical') {
				fetchRes = await getSingleHistoricalObject(id);
			} else {
				if (status === 'future') {
					const futureObjectRes = await getAllFutureObjects();

					const futureObject = futureObjectRes.data.filter(({
						id: objectId,
					}) => {
						if (objectId === parseInt(id)) return true;
						return false;
					});

					// eslint-disable-next-line prefer-destructuring
					fetchRes = futureObject[0];
				} else {
					fetchRes = await getSingleObject(id);
				}
			}

			setObjectsLoading(false);
			setObjectData(fetchRes.data || fetchRes);
		} catch (err) {
			setObjectsLoading(false);
			showAlert(err.message, 'danger');
			setFetchError(true);
		}
	};

	const handleClosePopup = () => {
		showPopupByKey('object');
	};

	useEffect(() => {
		if (objectPopupData) {
			fetchObjectById();
		}
	}, [objectPopupData]);

	return (
		<CSSTransition
			in={isOpen}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames="popup"
			mountOnEnter
			unmountOnExit
		>
			<div className="popup side_mod map_mod">
				<div className="overlay" />
				<div className="popup_in side_mod">
					<PopupCloseBtn onClick={handleClosePopup} />
					<div className="popup_content">
						{!isObjectsLoading && objectData ? (
							objectData.type === 'object' ? (
								<PopupObjectItem isTimelinePage={isTimelinePage} objectData={objectData} handleClosePopup={handleClosePopup} />
							) : (
								<PopupHistoricalObjectItem objectData={objectData} />
							)
						) : (
							!isFetchError ? (
								<Spinner
									v1Mod
								/>
							) : null
						)}
						{alert.visible && (
							<Alert
								alert={alert}
								hide={hideAlert}
							/>
						)}
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default PopupObject;
