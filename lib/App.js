import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import RootPanel from './components/RootPanel';

export default class App extends Component {
  render () {
    return (
      <span>
        <MapContainer />
        <hr />
        <RootPanel children={ this.props.children } />
      </span>
    );
  }
}
