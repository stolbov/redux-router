import React, { Component } from 'react';

import { createRedux } from 'redux';
import { Provider } from 'redux/react';

import { Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import modules from './modules/list-client';
import gatherRoutes from './gatherRoutes';
import gatherReducers from './gatherReducers';

const routes = gatherRoutes(modules);
const reducers = gatherReducers(modules);
const redux = createRedux(reducers);

export default class Root extends Component {
  constructor (props) {
    super(props);
    this.history = new BrowserHistory();
  }

  render () {
    return (
      <Provider redux={ redux }>
        { () => <Router history={ this.history } children={ routes } />}
      </Provider>
    );
  }
}
