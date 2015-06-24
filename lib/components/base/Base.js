import React, { Component } from 'react';
import MapContainer from '../mapper/MapContainer';
import BasePanel from './BasePanel';

export default class Base extends Component {
  render () {
    return (
      <span style={{ height: '100%' }}>
        <MapContainer />
        <BasePanel children={ this.props.children } />
      </span>
    );
  }
}
