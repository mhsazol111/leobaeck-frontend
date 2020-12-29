import { JsonDataContext } from 'context/jsonData';
import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import APP_DATA from 'utils/jsonAppData';
import Lottie from 'react-lottie';
import * as lottieAnimationData from 'components/Lottie/Logo.json';

const PopupLanding = ({
	isOpen,
}) => {
	const { langApp, hideLandingPopup } = useContext(JsonDataContext);

	const lottieOptions = {
		loop: false,
		autoplay: true,
		animationData: lottieAnimationData.default,
	};

	const handleOnClick = () => {
		hideLandingPopup(true);
	};

	return (
		<CSSTransition
			in={isOpen}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames="popup"
			mountOnEnter
			unmountOnExit
		>
			<div className="popup landing_mod">
				<section className="section landing_mod">
					<div className="section_in">
						<div className="landing_hero">
							<div className="landing_hero_wrap">
								<Lottie
									options={lottieOptions}
									isStopped={false}
									isPaused={false}
								/>
								{/* <img className="landing_hero_img" src={APP_DATA.landingPage.img1} alt="" />
								<div className="landing_decor_wrap">
									<img className="landing_decor" src={APP_DATA.landingPage.img2} alt="" />
								</div> */}
							</div>
							<div className="btn_wrap right_mod landing_mod">
								<button className="landing_btn" type="button" onClick={handleOnClick}>
									{APP_DATA.landingPage.buttonTitle[langApp]}
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302.05 70.98">
										<path d="M16.37,69.48h0L1.5,54.61h0V1.5H285.68l14.87,14.87V69.48Z" fill="none" stroke="#0038b9" strokeMiterlimit={20} strokeWidth={3} />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</CSSTransition>
	);
};

export default PopupLanding;
