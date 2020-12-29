import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';

// content
import { MopedInfoItem } from 'components/PreviewList';
import { Link } from 'react-router-dom';

const WeekObject = () => {
	const { langApp, weekObject } = useContext(JsonDataContext);

	const {
		title,
		ID,
		short_description: description,
		object_number: objectNumber,
		object_image: image,
		object_info: objectInfo,
	} = weekObject;

	return (
		<>
			<section className="section">
				<div className="section_in">
					<h2 className="section_title offset_mod decor_mod">{APP_DATA.weekObjectSection.title[langApp]}</h2>
					<div className="section_side width_v2_mod">
						<div className="section_row right_offset_mod">
							<div className="object_item_col text_mod">
								{objectNumber && (
									<div className="section_descr info_mod offset_v4_mod">{objectNumber[langApp]}</div>
								)}
								{title && (
									<h3 className="section_title size_v2_mod offset_v2_mod">{title && ReactHtmlParser(title[langApp])}</h3>
								)}
								{description && (
									<div className="section_descr offset_v4_mod">
										{description && ReactHtmlParser(description[langApp])}
									</div>
								)}
								{objectInfo && (
									<div className="moped_info_table offset_mod">
										{objectInfo.map(({ type, value }, index) => {
											return (
												<MopedInfoItem
													key={index}
													type={type}
													value={value}
												/>
											);
										})}
									</div>
								)}
								<Link className="btn_v4" to={`/object/${ID}`}>{APP_DATA.weekObjectSection.buttonTitle[langApp]}</Link>
							</div>
							{image && image.url && (
								<div className="object_item_col img_mod">
									<div className="object_img_w">
										<img className="section_img contain_mod" src={image.url} alt={image.alt} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WeekObject;
