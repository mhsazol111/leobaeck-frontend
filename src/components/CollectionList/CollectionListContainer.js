import React, { useEffect, useState, useContext } from 'react';

import { PreviewList } from 'components/PreviewList';
import { Alert, useAlert } from 'components/Alert';
import { getAvailableObjects } from 'api/object';
import { Spinner } from 'components/Spinner';
import { LoadMoreButton } from 'components/Buttons';
import { JsonDataContext } from 'context/jsonData';

const CollectionListContainer = () => {
	const { allFilteredObjects, setAllFilteredObjects, setAllObjects } = useContext(JsonDataContext);
	const [currentObjectsResultPage, setCurrentSearchResultPage] = useState(1);
	const [objectsResultTotalPages, setObjectsResultTotalPages] = useState(0);
	const [isObjectLoading, setObjectLoading] = useState(false);
	const [loadMoreBtn, showLoadMoreBtn] = useState(false);
	const [alert, showAlert, hideAlert] = useAlert();
	const [isLoadingMore, setLoadingMore] = useState(false);

	const mergeObjects = payload => {
		const mergedObjects = [...allFilteredObjects, ...payload];

		setAllFilteredObjects(mergedObjects);
	};

	const fetchAllObjects = async () => {
		try {
			setObjectLoading(true);

			const payload = await getAvailableObjects();
			const preparedTotalPagesValue = parseInt(payload.headers['x-wp-totalpages']);

			console.log(payload);

			setObjectsResultTotalPages(preparedTotalPagesValue);

			setAllFilteredObjects(payload.data);
			setAllObjects(payload.data);
			setObjectLoading(false);

			if (preparedTotalPagesValue > 1) {
				showLoadMoreBtn(true);
			}
		} catch (err) {
			showAlert(err.message, 'danger');
			setLoadingMore(false);
		}
	};

	const loadMoreObjectsResult = async () => {
		const updatedObjectsResultPage = currentObjectsResultPage + 1;

		if (updatedObjectsResultPage <= objectsResultTotalPages) {
			try {
				setLoadingMore(true);

				const res = await getAvailableObjects(updatedObjectsResultPage);

				if (res && res.data.length) {
					mergeObjects(res.data);

					setCurrentSearchResultPage(updatedObjectsResultPage);
					setLoadingMore(false);
					// // hide load more button if no search pages available
					if (updatedObjectsResultPage === objectsResultTotalPages) {
						showLoadMoreBtn(false);
					}
				} else {
					showLoadMoreBtn(false);
					setLoadingMore(false);
				}
			} catch (e) {
				throw new Error(e.message);
			}
		}
	};

	useEffect(() => {
		fetchAllObjects();
	}, []);

	return (
		<div className="collection_list_container">
			<div className="collection_list_w">
				{!isObjectLoading ? (
					allFilteredObjects.length ? (
						<PreviewList listItems={allFilteredObjects} />
					) : (
						<div className="result_message">No result</div>
					)
				) : <Spinner />}
				{alert.visible ? (
					<Alert
						alert={alert}
						hide={hideAlert}
					/>
				) : null}
			</div>
			{loadMoreBtn ? (
				<div className="collection_more_btn">
					<LoadMoreButton
						isDisabled={isObjectLoading}
						isLoading={isLoadingMore}
						onClick={loadMoreObjectsResult}
					/>
				</div>
			) : null}
		</div>
	);
};

export default CollectionListContainer;
