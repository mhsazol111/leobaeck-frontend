import React, { useEffect, useState } from 'react';

const SphereIframe = () => {
	const [isLoadingFinished, setIsLoadingFinished] = useState(false);

	useEffect(() => {
		const eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
		const eventer = window[eventMethod];
		const messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

		// Listen to message from child window
		eventer(
			messageEvent,
			(e) => {
				if (e.data === 'Loaded') {
					console.log('parent received message!: ', e.data);
					setIsLoadingFinished(true);
				}
			},
			false,
		);
	}, []);

	return (
		<div className={`landing_hero_iframe ${isLoadingFinished ? 'loading_finished' : ''}`}>
			<iframe
				id="player"
				src="https://my.zrealitysphere.com/api/hosting/eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNjgyIiwiaWF0IjoxNjA5MTE3ODUzLCJ0eXBlIjoiRE9XTkxPQUQiLCJleHAiOjE2MDk3MjI2NTN9.zK3FCC4EzXD12TxsZ0iDlU32V6vBb6oBh0lbOLBZ5lc/index.html"
				height="200"
				style={{ border: 'none', outline: 'none' }}
				width="300"
				title="Iframe Example"
			/>
		</div>
	);
};

export default SphereIframe;
