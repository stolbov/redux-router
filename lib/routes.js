import React from 'react';
import { Route } from 'react-router';
import App from './App';
import ChildForm from './components/ChildForm';
import Home from './components/Home';

export default (
	<Route component={ App }>
		<Route path="/" component={ Home } />
    <Route path="form" component={ ChildForm } />
  </Route>
);
