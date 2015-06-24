import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import MapDriver from './MapDriver/MapDriver';
import * as MapActions from './MapActions';

function select (state) {
  return { mapStore: state.mapStore };
}

export default class App {
  render () {
    return (
      <Connector select={ select }>
        {
          ({ mapStore, dispatch }) => (
            <MapDriver
              mapStore={ mapStore }
              actions={ bindActionCreators(MapActions, dispatch) }
            />
          )
        }
      </Connector>
    );
  }
}
