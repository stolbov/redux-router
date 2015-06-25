import React, { PropTypes, Component } from 'react';

export default class LayerList extends Component {
  static propTypes = {
    layers: PropTypes.array.isRequired,
    clearLayers: PropTypes.func.isRequired
  }

  render () {
    const layerList = this.props.layers.map((layer) => (
      <li key={ layer.name }>{ layer.name }</li>
    ));

    return (
      <span>
        <button onClick={ ::this.handleClearButtonClick }>
          Clear layers
        </button>
        <ul>
          { layerList }
        </ul>
      </span>
    );
  }

  handleClearButtonClick (event) {
    event.preventDefault();
    this.props.clearLayers();
  }
}
