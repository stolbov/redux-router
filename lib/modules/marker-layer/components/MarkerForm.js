import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import MarkerList from './MarkerList';
import MarkerAddForm from './MarkerAddForm';

export default class MarkerForm extends Component {
  static propTypes = {
    markers: PropTypes.array.isRequired,
    addMarker: PropTypes.func.isRequired,
    removeMarker: PropTypes.func.isRequired
  }

  render () {
    return (
      <span>
        <Link to="/"> Home </Link>
        <h1>Map:</h1>
        <MarkerList
          markers={ this.props.markers }
          removeMarker={ this.props.removeMarker }
        />
        <MarkerAddForm addMarker={ this.props.addMarker } />
      </span>
    );
  }
}
