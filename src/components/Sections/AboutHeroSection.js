import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const AboutHeroSection = ({
	title,
	subtitle,
	img,
	text,
	colLeftText,
	colRightText,
}) => {
	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="section_row right_offset_v2_mod offset_v2_mod">
						<div className="about_hero_col title_mod">
							<h2 className="section_title decor_mod offset_v4_mod">{title}</h2>
							<div className="about_limit_wrap">
								<div className="section_title size_v2_mod right_offset_mod">{subtitle}</div>
							</div>
						</div>
						<div className="about_hero_col img_mod">
							<div className="img_holder height_mod offset_mod">
								<div className="img_holder_in mask_mod">
									<img className="img_holder_image" src={img} alt="" />
								</div>
							</div>
							<div className="section_descr">{ ReactHtmlParser(text)}</div>
						</div>
					</div>
					<div className="section_side width_v5_mod top_decor_v2_mod">
						<div className="section_row right_offset_mod">
							<div className="section_col col_2_mod">
								<div className="section_descr">{ ReactHtmlParser(colLeftText)}</div>
							</div>
							<div className="section_col col_2_mod top_offset_mod">
								<div className="section_descr">{ ReactHtmlParser(colRightText)}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutHeroSection;
