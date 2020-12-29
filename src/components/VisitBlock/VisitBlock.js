import React, { useContext } from 'react';
import classNames from 'classnames';
import APP_DATA from 'utils/jsonAppData';
import { JsonDataContext } from 'context/jsonData';

const VisitBlock = ({
	img,
	title,
	buttonTitle,
	buttonUrl,
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
}) => {
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
	const { langApp, showPopupByKey } = useContext(JsonDataContext);

	const handleOpenPopup = () => {
		showPopupByKey('virtualExhibit');
	};

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className={sectionSideClasses}>
						<h2 className="section_title decor_mod offset_mod">{title}</h2>
						<div className="section_row right_offset_mod visit_mod">
							<div className="visit_col btn_mod">
								<button type="button" className="btn_v4" onClick={handleOpenPopup}>{buttonTitle}</button>
							</div>
							<div className="visit_col img_mod">
								<div className="img_holder">
									<div className="img_holder_in mask_mod">
										<img
											className="img_holder_image"
											src={img}
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default VisitBlock;
