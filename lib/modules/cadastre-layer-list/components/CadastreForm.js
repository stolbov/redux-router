import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import LayerList from './LayerList';
import LayerFetchForm from './LayerFetchForm';

const MODE_FORM = 'form';
const MODE_LOADING = 'loading';
const MODE_LIST = 'list';

export default class CadastreForm extends Component {
  static propTypes = {
    cadastre: PropTypes.object.isRequired,
    fetchLayerList: PropTypes.func.isRequired,
    clearLayers: PropTypes.func.isRequired
  }

  render () {
    const cadastre = this.props.cadastre;
    let mode;
    if (cadastre.loading) {
      mode = MODE_LOADING;
    } else if (cadastre.layers.length) {
      mode = MODE_LIST;
    } else {
      mode = MODE_FORM;
    }

    let content;
    switch (mode) {
      case MODE_LOADING:
        content = (
          <h2>Loading...</h2>
        ); break;

      case MODE_LIST:
        content = (
          <LayerList
            layers={ cadastre.layers }
            clearLayers= { this.props.clearLayers }
          />
        ); break;

      case MODE_FORM:
        content = (
          <LayerFetchForm fetchLayerList={  this.props.fetchLayerList } />
        ); break;

      default:
        throw new Error('Unknown mode.');
    }

    return (
      <span>
        <Link to="/"> Home </Link>
        <h1>Cadastre layers</h1>
        { content }
      </span>
    );
  }
}
