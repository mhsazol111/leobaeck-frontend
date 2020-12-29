import React from 'react';
import classNames from 'classnames';

const Spinner = ({ limitColMod, v1Mod }) => {
	const spinnerClasses = classNames('spinner_wrap', { limit_col_mod: limitColMod, v1_mod: v1Mod });

	return (
		<div className={spinnerClasses}>
			<div className="spinner">
				<div className="spinner-border" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
