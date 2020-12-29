import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const MapMarker = ({
	id,
	text,
	onClick,
}) => {
	return (
		<button className="map_pointer_wrap" data-id={id} id={id} type="button" onClick={onClick}>
			<div className="map_pointer_hover">{ReactHtmlParser(text)}</div>
			<svg className="map_pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 23 23">
				<defs>
					<clipPath id={`a${id}`} transform="translate(2 2)">
						<path d="M2.2,2.2A7.52,7.52,0,0,1,12.84,12.84h0A7.52,7.52,0,0,1,2.2,2.2Z" fill="none" />
					</clipPath>
				</defs>
				<g clipPath={`url(#a${id})`}>
					<path d="M2.2,2.2A7.52,7.52,0,0,1,12.84,12.84h0A7.52,7.52,0,0,1,2.2,2.2Z" transform="translate(2 2)" fill="#fff" stroke="#0038b9" strokeMiterlimit={20} strokeWidth={4} />
				</g>
			</svg>
		</button>
	);
};

export default MapMarker;
