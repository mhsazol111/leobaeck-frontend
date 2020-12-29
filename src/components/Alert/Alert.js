import React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as CloseIcon } from 'i/icons/close.svg';

const Alert = ({ alert, hide, limitColMod }) => {
	const alertClasses = classNames(`alert alert-${alert.type || 'warning'} alert-dismissible`, { limit_col_mod: limitColMod });

	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350,
			}}
			classNames="alert"
			mountOnEnter
			unmountOnExit
		>
			<div className={alertClasses}>
				<strong className="alert_message">{alert.text}</strong>
				<button onClick={hide} type="button" className="alert_remove" aria-label="Close">
					<span aria-hidden="true"><CloseIcon /></span>
				</button>
			</div>
		</CSSTransition>
	);
};

export default Alert;
