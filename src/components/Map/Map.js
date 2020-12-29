import React, { useState, useRef, useContext } from 'react';

import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';

import { JsonDataContext } from 'context/jsonData';
import {
	MAP_STYLES,
	MAP_API_KEY,
	MAP_DEFAULT_CENTER,
	LOCATIONS,
} from './constant';
import MapMarker from './MapMarker';
import ClusterMarker from './ClusterMarker';

const Map = ({
	mapPoints,
}) => {
	const { showPopupByKey, setObjectPopupData } = useContext(JsonDataContext);
	const { langApp } = useContext(JsonDataContext);

	const mapRef = useRef();
	const [zoom2, setZoom] = useState(5);
	const [bounds2, setBounds] = useState(null);
	const points = mapPoints;

	const { clusters, supercluster } = useSupercluster({
		points,
		bounds2,
		zoom2,
		options: { radius: 75, maxZoom: 20 },
	});

	const handleOpenPopup = (objectId, objectType, status) => {
		setObjectPopupData({
			id: objectId,
			type: objectType,
			status,
		});
		showPopupByKey('object');
	};

	return (
		<>
			<div className="map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: MAP_API_KEY }}
					defaultCenter={MAP_DEFAULT_CENTER}
					defaultZoom={5}
					options={map => ({ mapTypeId: map.MapTypeId.ROADMAP, styles: MAP_STYLES })}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map }) => {
						// eslint-disable-next-line no-param-reassign
						mapRef.current = map;
					}}
					onChange={({ zoom, bounds }) => {
						setZoom(zoom);
						setBounds([
							bounds.nw.lng,
							bounds.se.lat,
							bounds.se.lng,
							bounds.nw.lat,
						]);
					}}
				>
					{/* {clusters.map(cluster => {
					const [longitude, latitude] = cluster.geometry.coordinates;
					const {
						cluster: isCluster,
						point_count: pointCount,
					} = cluster.properties;

					if (isCluster) {
						return <ClusterMarker lat={latitude} lng={longitude} count={pointCount} />;
					}

					return <MapMarker lat={latitude} lng={longitude} content={cluster.properties} />;
				})} */}
					{mapPoints && mapPoints.map(({
						geometry,
						properties,
					}) => {
						const {
							id,
							text,
							type,
							status,
						} = properties;
						return (
							<MapMarker
								id={`map-marker-${id}`}
								type={type}
								text={text[langApp]}
								lat={geometry.coordinates[0]}
								lng={geometry.coordinates[1]}
								onClick={() => handleOpenPopup(id, type, status)}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		</>
	);
};

export default Map;
