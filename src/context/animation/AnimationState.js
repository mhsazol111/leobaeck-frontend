/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';

import AnimationContext from './AnimationContext';

const AnimationState = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(null);
	const [scrollCheckActive, setScrollCheckActive] = useState(false);
	const [pageScrollTop, setPageScrollTop] = useState(0);
	const [windowHeight, setWindowHeight] = useState(null);
	const [footerHeight, setFooterHeight] = useState(null);
	const [footerTop, setFooterTop] = useState(null);
	const footerEl = useRef();

	const onResize = () => {
		const windowinnerHeight = window.innerHeight;
		const windowinnerWidth = window.innerWidth;

		setWindowWidth(window.innerWidth);
		setWindowHeight(windowinnerHeight);

		const vh = windowinnerHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');

		document.body.classList.toggle('vert_mod', window.outerWidth * .56 < window.innerHeight);
		// window.outerWidth * .5625 < window.innerHeight ? window.innerHeight / 1080 * 10 : window.outerWidth / 1920 * 10

		if (footerEl.current) {
			setFooterHeight(footerEl.current.offsetHeight);
			setFooterTop(footerEl.current.offsetTop);
			// here update size
		}
	};

	const onScroll = () => {
			setPageScrollTop(window.scrollY);
	};

	useEffect(() => {
		console.log('ScrollTop', pageScrollTop);
	}, [pageScrollTop]);

	useEffect(() => {
		onResize();
		onScroll();
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onResize);
	}, []);

	return (
		<AnimationContext.Provider
			value={{
				windowWidth,
				setWindowWidth,
				windowHeight,
				setWindowHeight,
				footerEl,
				footerHeight,
				setFooterHeight,
				footerTop,
				setFooterTop,
				scrollCheckActive,
				setScrollCheckActive,
				pageScrollTop,
			}}
		>
			{children}
		</AnimationContext.Provider>
	);
};

export default AnimationState;
/* eslint-disable */
