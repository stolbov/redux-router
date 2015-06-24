import React, { Component } from 'react';
import { Connector } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as MarkerActions from '../actions/MarkerActions';
import MarkerForm from './MarkerForm';

function select (state) {
  return { markers: state.markers };
}

export default class MarkerLayer extends Component {
  render () {
    return (
      <Connector select={ select }>
        {
          ({ markers, dispatch }) => (
            <MarkerForm
              markers={ markers }
              { ...bindActionCreators(MarkerActions, dispatch) }
            />
          )
        }
      </Connector>
    );
  }
}
