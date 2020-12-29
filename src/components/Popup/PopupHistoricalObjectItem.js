import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';
import ReactHtmlParser from 'react-html-parser';

// components
import PlaceholderImage from 'i/placeholder-image.png';

const PopupHistoricalObjectItem = ({
	objectData,
}) => {
	const {
		title,
		acf,
	} = objectData;
	const { langApp } = useContext(JsonDataContext);

	return (
		<>
			<div className="panel_item">
				{title && <h3 className="section_title size_v2_mod offset_mod">{ReactHtmlParser(title[langApp])}</h3>}
				{acf && acf.image ? (
					<figure className="panel_img_wrap">
						<div className="panel_img_wrap_in lg_mod">
							<img className="panel_img" src={acf.image.url} alt={acf.image.alt} />
						</div>
						{acf.image_caption && (
							<figcaption className="panel_img_caption">{acf.image_caption[langApp]}</figcaption>
						)}
					</figure>
				) : (
					<img className="preview_img" src={PlaceholderImage} alt="Not Found" />
				)}
				{acf && acf.description && <div className="panel_text">{ReactHtmlParser(acf.description[langApp])}</div>}
				{/* {button && <a className="btn_base">{button[langApp]}</a>} */}
			</div>
		</>
	);
};

export default PopupHistoricalObjectItem;
