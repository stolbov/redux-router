import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
import RootPanel from './components/RootPanel';

export default class App extends Component {
  render () {
    return (
      <span style={{ height: '100%' }}>
        <MapContainer />
        <RootPanel children={ this.props.children } />
      </span>
    );
  }
}
