import React, { Component } from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';
import { Router } from 'react-router';
import routes from './routes';
import BrowserHistory from 'react-router/lib/BrowserHistory';

const redux = createRedux(stores);

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
