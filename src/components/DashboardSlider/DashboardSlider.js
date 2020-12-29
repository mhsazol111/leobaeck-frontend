import React, { useContext } from 'react';
import Slider from 'react-slick';

import { SliderControls } from 'components/SliderControls';
import ReactHtmlParser from 'react-html-parser';
import { JsonDataContext } from 'context/jsonData';

const dashboardSliderSettings = {
	prevArrow: <SliderControls prevMod dashboardMod />,
	nextArrow: <SliderControls nextMod dashboardMod nextArrow />,
	infinite: true,
	slidesToShow: 1,
	fade: true,
	slidesToScroll: 1,
	dots: true,
	dotsClass: 'slick-dots dashboard_mod',
	arrows: true,
};

const DashboardSlider = ({
	slidesData,
}) => {
	const { langApp } = useContext(JsonDataContext);
	return (
		<>
			<div className="dashboard_slider_w">
				<Slider className="dashboard_slider" {...dashboardSliderSettings}>
					{slidesData && slidesData.map(({
						photo,
						photo_caption,
					}, index) => {
						const { url: imageUrl, alt: imageAlt } = photo;
						const { main_caption, second_caption } = photo_caption;
						return (
							<div className="dashboard_slider_item" key={index}>
								<div className="dashboard_slider_img">
									<div className="dashboard_slider_icon info_mod">
										<svg className="icon icon-info size_mod">
											<use xlinkHref="i/sprite/sprite.svg#info" />
										</svg>
									</div>
									<div className="dashboard_slider_icon doc_mod">
										<svg className="icon icon-document_3 size_mod">
											<use xlinkHref="i/sprite/sprite.svg#document_3" />
										</svg>
									</div>
									<img className="section_img contain_mod" src={imageUrl} alt={imageAlt} />
								</div>
								<div className="dashboard_slider_bottom">
									<div className="dashboard_slider_text">
										<div className="dashboard_slider_title">{main_caption[langApp]}</div>
										<div className="dashboard_slider_descr">{ReactHtmlParser(second_caption[langApp])}</div>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</>
	);
};

export default DashboardSlider;
