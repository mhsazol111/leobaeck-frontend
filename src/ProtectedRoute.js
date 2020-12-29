import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from 'context/auth';

const ProtectedRoute = ({
	component,
	path,
}) => {
	const { loggedIn } = useContext(AuthContext);

	if (!loggedIn) {
		return (
			<Redirect to="/" />
		);
	}

	return (
		<Route
			exact
			path={path}
			component={component}
			// render={props => <component />}
		/>
	);
};

export default ProtectedRoute;
