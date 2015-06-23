import React, { PropTypes, Component } from 'react';
import MarkerList from './markers/MarkerList';
import MarkerAddForm from './markers/MarkerAddForm';

export default class App extends Component {
  static propTypes = {
    mapStore: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    return (
      <span>
        <h1>Map:</h1>
        <MarkerList
          markers={ this.props.mapStore.markers }
          removeMarker={ this.props.actions.removeMarker }
        />
        <MarkerAddForm addMarker={ this.props.actions.addMarker } />
      </span>
    );
  }
}
