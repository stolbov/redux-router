import React from 'react';
import { Route } from 'react-router';
import App from './App';
import ChildForm from './components/ChildForm';

export default (
	<Route path="/" component={ App }>
    <Route path="form" component={ ChildForm } />
  </Route>
);
