import React, { PropTypes, Component } from 'react';

export default class LayerFetchForm extends Component {
  static propTypes = {
    fetchLayerList: PropTypes.func.isRequired
  }

  render () {
    return (
      <span>
        <button onClick={ ::this.handleFetchButtonClick }>
          Fetch Layers
        </button>
      </span>
    );
  }

  handleFetchButtonClick (event) {
    event.preventDefault();
    this.props.fetchLayerList('http://maps.rosreestr.ru/arcgis/rest/services/Cadastre?f=pjson');
  }
}
