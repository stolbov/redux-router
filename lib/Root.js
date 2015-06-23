import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';
import App from './App';

const redux = createRedux(stores);

export default class Root {
  render () {
    return (
      <Provider redux={ redux }>
        { () => <App />}
      </Provider>
    );
  }
}
