import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import MapDriver from './MapDriver';

function select (state) {
  return { mapState: state.mapState };
}

export default class App {
  render () {
    return (
      <Connector select={ select }>
        {
          ({ mapState, dispatch }) => (
            <MapDriver
              mapState={ mapState }
            />
          )
        }
      </Connector>
    );
  }
}
