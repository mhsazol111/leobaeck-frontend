import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { JsonDataContext } from 'context/jsonData';

const ExploreBlock = ({
	title,
	exploreBlockData,
	widthV1Mod,
	widthV2Mod,
	widthV3Mod,
	widthV4Mod,
	widthV5Mod,
	widthV6Mod,
	leftMod,
	rightMod,
	topDecorMod,
	topDecorV2Mod,
	offsetMod,
	offsetV2Mod,
	rightOffsetMod,
	leftOffsetMod,
	rightOffsetV2Mod,
	visitMod,
	col2Mod,
	col3Mod,
	col4Mod,
	infoTextMod,
	infoImgMod,
	sideMod,
	contentMod,
	topOffsetMod,
	topOffsetV2Mod,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const sectionSideClasses = classNames('section_side', {
		width_v1_mod: widthV1Mod,
		width_v2_mod: widthV2Mod,
		width_v3_mod: widthV3Mod,
		width_v4_mod: widthV4Mod,
		width_v5_mod: widthV5Mod,
		width_v6_mod: widthV6Mod,
		left_mod: leftMod,
		right_mod: rightMod,
		top_decor_mod: topDecorMod,
		top_decor_v2_mod: topDecorV2Mod,
		offset_mod: offsetMod,
	});

	const sectionRowClasses = classNames('section_row', {
		offset_v2_mod: offsetV2Mod,
		right_offset_mod: rightOffsetMod,
		left_offset_mod: leftOffsetMod,
		right_offset_v2_mod: rightOffsetV2Mod,
		visit_mod: visitMod,
	});

	const sectionColClasses = classNames('section_col', {
		col_2_mod: col2Mod,
		col_3_mod: col3Mod,
		col_4_mod: col4Mod,
		info_text_mod: infoTextMod,
		info_img_mod: infoImgMod,
		side_mod: sideMod,
		content_mod: contentMod,
		top_offset_mod: topOffsetMod,
		top_offset_v2_mod: topOffsetV2Mod,
	});

	const { items } = exploreBlockData;

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className={sectionSideClasses}>
						<h2 className="section_title decor_mod offset_mod">{title}</h2>
						<div className={sectionRowClasses}>
							{items.map(({
								url,
								title: exploreTitle,
							}, index) => {
								return (
									<div className={sectionColClasses} key={index}>
										<Link className="explore_item" to={url}>
											<div className="explore_item_decor_w">
												<svg className="explore_item_decor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388 330.56">
													<path
														d="M203,1.5,1.5,203V329.06H185L386.5,127.57V1.5Z"
														style={{
															fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: '3px',
														}}
													/>
												</svg>
											</div>
											<div className="explore_title">{ ReactHtmlParser(exploreTitle[langApp]) }</div>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ExploreBlock;
