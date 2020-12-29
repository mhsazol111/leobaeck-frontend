import React, { useReducer } from 'react';

import { alertReducer } from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from './constant';

const useAlert = () => {
	const [alert, dispatch] = useReducer(alertReducer, { visible: false });

	const showAlert = (text, type = 'warning') => {
		dispatch({
			type: SHOW_ALERT,
			payload: { text, type },
		});
	};

	const hideAlert = () => dispatch({ type: HIDE_ALERT });

	return [alert, showAlert, hideAlert];
};

export default useAlert;
