import React from 'react';
import { Route } from 'react-router';
import Base from './components/base/Base';
import NotFound from './components/NotFound';

export default function gatherRoutes (modules) {
	let subRoutes = [];
	for (let moduleName of Object.keys(modules)) {
		subRoutes.push(React.cloneElement(
				modules[moduleName].routes,
				{ key: moduleName }
		));
	}

	return (
		<Route component={ Base }>
			{ subRoutes }
			<Route path="*" component={ NotFound } />
	  </Route>
	);
}
