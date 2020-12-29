import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { SliderControls } from 'components/SliderControls';
import ReactHtmlParser from 'react-html-parser';
import { JsonDataContext } from 'context/jsonData';

const heroSliderSettings = {
	prevArrow: <SliderControls prevMod heroMod />,
	nextArrow: <SliderControls nextMod heroMod nextArrow />,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
};

const HomeHeroSection = ({ sectionData }) => {
	const { langApp } = useContext(JsonDataContext);

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="hero_slider_w">
						<Slider {...heroSliderSettings} className="hero_slider heroSlider">
							{sectionData.map(({
								title,
								excerpt,
								button,
								image,
							}, item) => {
								return (
									<div className="hero_slider_item" key={item.id}>
										<div className="hero_slider_item_in">
											<div className="hero_slider_item_text">
												<div className="hero_slider_title_w">
													<h2 className="section_title offset_v2_mod">
														{title[langApp]}
													</h2>
												</div>
												<div className="section_descr offset_mod">
													{excerpt !== null && ReactHtmlParser(excerpt[langApp])}
												</div>
												<Link
													className="btn_v4"
													to={button.url}
												>
													{button.text[langApp]}
												</Link>
											</div>
											<div className="hero_slider_img_wrap">
												<div className="img_holder height_v2_mod lg_mod">
													<div className="img_holder_in mask_mod">
														<img className="img_holder_image" src={image} alt={title} />
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeHeroSection;
