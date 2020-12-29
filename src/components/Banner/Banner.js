import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { UiContext } from 'context/ui';
import { AuthContext } from 'context/auth';
import classNames from 'classnames';

import { JsonDataContext } from 'context/jsonData';

const Banner = ({
	bannerArray,
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
	sideOffsetMod,
	indentMod,
	bgMod,
	wrapWidthV1Mod,
	wrapWidthV2Mod,
	titleColV1Mod,
	titleColV2Mod,
	titleColorMod,
	sizeV2Mod,
	limitV2Mod,
	textColV1Mod,
	textColV2Mod,
	textColTopOffsetMod,
	textColTopOffsetV1Mod,
	descrColorMod,
	descrOffsetMod,
	bottomDescrColorMod,
	bottomDescrOffsetMod,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const {
		title,
		text,
		btnTitle,
		bottomDescr,
	} = bannerArray;
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
		offset_mod: sideOffsetMod,
		indent_mod: indentMod,
		bg_mod: bgMod,
	});
	const bannerWrapClasses = classNames('banner_wrap', {
		width_v1_mod: wrapWidthV1Mod,
		width_v2_mod: wrapWidthV2Mod,
	});
	const bannerLeftColClasses = classNames('banner_col', {
		title_v1_mod: titleColV1Mod,
		title_v2_mod: titleColV2Mod,
	});
	const sectionTitleClasses = classNames('section_title', {
		color_mod: titleColorMod,
		size_v2_mod: sizeV2Mod,
		limit_v2_mod: limitV2Mod,
	});
	const bannerRigthColClasses = classNames('banner_col', {
		text_v1_mod: textColV1Mod,
		text_v2_mod: textColV2Mod,
		top_offset_mod: textColTopOffsetMod,
		top_offset_v1_mod: textColTopOffsetV1Mod,
	});
	const sectionDescrClasses = classNames('section_descr', {
		color_mod: descrColorMod,
		offset_mod: descrOffsetMod,
	});
	const sectionDescr2Classes = classNames('section_descr', {
		color_mod: bottomDescrColorMod,
		offset_top_mod: bottomDescrOffsetMod,
	});
	const { openPopup } = useContext(UiContext);
	const { loggedIn } = useContext(AuthContext);

	function openPopupFunc() {
		openPopup('signup');
	}

	if (loggedIn) return null;

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className={sectionSideClasses}>
						<div className={bannerWrapClasses}>
							<div className="banner_row">
								<div className={bannerLeftColClasses}>
									<h2 className={sectionTitleClasses}>{title[langApp]}</h2>
								</div>
								<div className={bannerRigthColClasses}>
									<div className={sectionDescrClasses}>{ ReactHtmlParser(text[langApp])}</div>
									<button className="btn_v2" type="button" onClick={openPopupFunc}>{btnTitle[langApp]}</button>
									{bottomDescr && (
										<div className={sectionDescr2Classes}>
											{langApp === 'en' && (
												<>
													<span>Or </span>
													<a href="#" onClick={e => { e.preventDefault(); openPopupFunc(); }}>Sign Up</a>
													<span> for additional access to all features.</span>
												</>
											)}
											{langApp === 'de' && (
												<>
													<span>Or </span>
													<a href="#" onClick={e => { e.preventDefault(); openPopupFunc(); }}>Sign Up</a>
													<span> for additional access to all features.</span>
												</>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
