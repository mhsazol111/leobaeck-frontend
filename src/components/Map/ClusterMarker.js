import React from 'react';

const ClusterMarker = ({ content, counter }) => {
	const {
		id,
	} = content.properties;
	return (
		<div className="map_pointer_wrap cluster_mod" data-id={id}>
			<div className="map_pointer_counter">{counter}</div>
			<svg className="map_pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16">
				<defs>
					<clipPath id="a">
						<path d="M2.65,2.6A7.52,7.52,0,0,1,13.29,13.24h0A7.52,7.52,0,0,1,2.65,2.6Z" fill="none" />
					</clipPath>
				</defs>
				<g clipPath="url(#a)">
					<path d="M2.65,2.6A7.52,7.52,0,0,1,13.29,13.24h0A7.52,7.52,0,0,1,2.65,2.6Z" fill="red" stroke="green" strokeMiterlimit={20} strokeWidth={4} />
				</g>
			</svg>
		</div>
	);
};

export default ClusterMarker;
