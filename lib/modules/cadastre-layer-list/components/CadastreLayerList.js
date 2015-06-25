import React, { Component } from 'react';
import { Connector } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as CadastreActions from '../actions/CadastreActions';
import CadastreForm from './CadastreForm';

function select (state) {
  return { cadastre: state.cadastre };
}

export default class CadastreLayerList extends Component {
  render () {
    return (
      <Connector select={ select }>
        {
          ({ cadastre, dispatch }) => (
            <CadastreForm
              cadastre={ cadastre }
              { ...bindActionCreators(CadastreActions, dispatch) }
            />
          )
        }
      </Connector>
    );
  }
}
