import React, { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { JsonDataContext } from 'context/jsonData';
import { AnimationContext } from 'context/animation';
import APP_DATA from 'utils/jsonAppData';
import { ReactComponent as IconArrow } from 'i/icons/arrow_right.svg';
import FooterMenu from './FooterMenu';

const Footer = ({
	isTimelinePage,
}) => {
	const { appBaseData, langApp } = useContext(JsonDataContext);
	const { footerEl } = useContext(AnimationContext);
	const [footerData, setFooterData] = useState(null);

	useEffect(() => {
		if (appBaseData) {
			setFooterData(appBaseData);
		}
	}, [appBaseData]);

	return (
		footerData && (
			<footer className={`footer ${isTimelinePage ? 'timeline_mod' : ''}`} ref={footerEl}>
				<div className="section_in">
					<div className="footer_row">
						<div className="footer_col logo_mod">
							<div className="footer_logo">
								<img className="section_img contain_mod" src={footerData.footer_logo.url} alt={footerData.footer_logo.alt} />
							</div>
						</div>
						<div className="footer_col info_mod">
							<div className="footer_top">
								<FooterMenu />
							</div>
							<div className="footer_sponsors_wrap">
								{footerData.sponsors && footerData.sponsors.map(({
									image,
								}) => {
									return (
										<div className="footer_sponsor_img_w" key={image.id}>
											<div className="footer_sponsor_img">
												<img className="section_img contain_mod" src={image.url} alt={image.alt} />
											</div>
										</div>
									);
								})}
							</div>
							<div className="footer_bottom_text">
								<a className="popup_privacy" href="#">
									{APP_DATA.signupPopup.privacyLink[langApp]}
									<IconArrow className="icon icon-arrow_right link_mod" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)

	);
};

export default Footer;
