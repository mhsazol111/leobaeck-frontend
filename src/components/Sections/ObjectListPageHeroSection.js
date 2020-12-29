import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';

const ObjectListPageHeroSection = () => {
	const { langApp, weekObject } = useContext(JsonDataContext);

	const {
		title,
		ID,
		short_description: description,
		object_number: objectNumber,
		object_image: image,
	} = weekObject;

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="section_row right_offset_v3_mod">
						<div className="object_hero_col decr_mod">
							<div className="section_title offset_v2_mod">{APP_DATA.weekObjectSection.title[langApp]}</div>
							<div className="section_row right_offset_mod">
								{objectNumber && (
									<div className="object_hero_subcol side_mod">
										<div className="section_descr info_mod">{objectNumber[langApp]}</div>
									</div>
								)}
								<div className="object_hero_subcol main_mod">
									<div className="section_title size_v2_mod offset_v2_mod">{ReactHtmlParser(title[langApp])}</div>
									{description && (
										<div className="section_descr offset_mod">
											{ReactHtmlParser(description[langApp])}
										</div>
									)}
									<Link className="btn_v4" to={`/object/${ID}`}>{APP_DATA.weekObjectSection.buttonTitle[langApp]}</Link>
								</div>
							</div>
						</div>
						{image && image.url && (
							<div className="object_hero_col img_mod">
								<div className="img_holder height_v3_mod">
									<div className="img_holder_in">
										<img className="img_holder_image" src={image.url} alt={image.alt} />
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ObjectListPageHeroSection;
