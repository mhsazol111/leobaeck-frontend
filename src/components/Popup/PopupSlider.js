import React from 'react';
import Slider from 'react-slick';

// components
import { ReactComponent as IconClose } from 'i/icons/close_2.svg';
import { ReactComponent as IconLeft } from 'i/icons/arrow_prev.svg';
import { ReactComponent as IconRight } from 'i/icons/arrow_next.svg';
import { SliderControls } from 'components/SliderControls';
import PopupItem from './PopupItem';

// content
import { POPUP_ARRAY } from './page_array';

const popupSliderSettings = {
	prevArrow: <SliderControls prevMod panelMod />,
	nextArrow: <SliderControls nextMod panelMod nextArrow />,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	adaptiveHeight: true,
};

const PopupSlider = () => {
	function closePopupFunc() {
		document.querySelector('.popup').classList.remove('active_mod');
	}

	return (
		<div className="popup side_mod popupSlider">
			<div className="overlay" />
			<div className="popup_in side_mod">
				<button className="popup_close v2_mod" type="button" onClick={closePopupFunc}>
					<IconClose className="icon icon-close_2 size_mod" />
				</button>
				<div className="popup_content">
					{/* <div className="slider_control prev_mod panel_mod">
						<IconLeft className="icon icon-arrow_prev size_mod" />
					</div>
					<div className="slider_control next_mod panel_mod">
						<IconRight className="icon icon-arrow_next size_mod" />
					</div> */}
					<Slider {...popupSliderSettings} className="panel_slider">
						{POPUP_ARRAY.slider.slides.map((item) => {
							return <PopupItem content={item} />;
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default PopupSlider;
