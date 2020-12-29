import React, { useState, useEffect } from 'react';
// import { Filters } from 'components/Filters';
import { useLocation, useHistory } from 'react-router-dom';
import { Alert, useAlert } from 'components/Alert';
import { Map } from 'components/Map';

import { getMapData } from 'api/data';

const MapPage = () => {
	const [mapDefaultPoints, setMapDefaultPoints] = useState(false);
	const [mapFilteredPoints, setMapFilteredPoints] = useState(false);
	const [alert, showAlert, hideAlert] = useAlert();
	const [mapPoints, setMapPoints] = useState(false);
	const { hash } = useLocation();
	const [targetHash, setTargetHash] = useState(null);
	const history = useHistory();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (hash !== '' && mapPoints) {
			setTargetHash(hash);
			history.push('/map');
		}
	}, [
		hash,
		mapPoints,
	]);

	useEffect(() => {
		if (targetHash) {
			const targetObject = document.getElementById(`map-marker-${targetHash.split('#')[1]}`);
			targetObject.click();
		}
	}, [
		targetHash,
	]);

	const createMapMarkers = mapPointsData => {
		const pointsArray = [];
		mapPointsData.forEach(({
			ID,
			name,
			latlng,
			type,
			status,
		}) => {
			if (typeof latlng !== 'undefined' && latlng.length > 0) {
				if (!isNaN(parseFloat(latlng[1])) && !isNaN(parseFloat(latlng[0]))) {
					pointsArray.push({
						type: 'Feature',
						properties: {
							cluster: true,
							id: ID,
							text: name,
							type,
							status,
						},
						geometry: {
							type: 'Point',
							coordinates: [
								parseFloat(latlng[0]),
								parseFloat(latlng[1]),
							],
						},
					});
				}
			}

			return false;
		});

		setMapPoints(pointsArray);
	};

	const fetchAllMapData = async () => {
		try {
			const res = await getMapData();

			// createMapMarkers(res.data);
			setLoaded(true);
			setMapDefaultPoints(res.data);
			setMapFilteredPoints(res.data);
		} catch (err) {
			showAlert(err.message, 'danger');
		}
	};

	useEffect(() => {
		fetchAllMapData();
	}, []);

	useEffect(() => {
		if (mapFilteredPoints) {
			createMapMarkers(mapFilteredPoints);
		}
	}, [mapFilteredPoints]);

	return (
		<section className="section no_offset_mod map_mod">
			<div className="section_in">
				{/* <Filters
					mapFilter
					allObjects={mapDefaultPoints}
					allFilteredObjects={mapFilteredPoints}
					setAllFilteredObjects={setMapFilteredPoints}
					v3Mod
				/> */}
				{alert.visible ? (
					<Alert
						alert={alert}
						hide={hideAlert}
					/>
				) : null}
			</div>
			{mapPoints ? (
				<Map
					mapPoints={mapPoints}
				/>
			) : null}
		</section>
	);
};

export default MapPage;
