import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import Map from './Map';
import * as MapActions from './MapActions.js';

function select (state) {
  return { mapStore: state.mapStore };
}

export default class App {
  render () {
    return (
      <Connector select={ select }>
        {
          ({ mapStore, dispatch }) => (
            <Map
              mapStore={ mapStore }
              actions={ bindActionCreators(MapActions, dispatch) }
            />
          )
        }
      </Connector>
    );
  }
}
