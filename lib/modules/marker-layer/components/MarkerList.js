import React, { Component, PropTypes } from 'react';

import MarkerListItem from './MarkerListItem';

export default class MarkerList extends Component {
  static propTypes = {
    markers: PropTypes.array.isRequired,
    removeMarker: PropTypes.func.isRequired
  }

  render () {
    if (this.props.markers.length) {
      return (
        <ul>
          {
            this.props.markers.map(marker => (
              <MarkerListItem
                key={ marker.id }
                { ...marker }
                removeMarker={ this.props.removeMarker }
              />
            ))
          }
        </ul>
      );
    } else {
      return (
        <p>No markers on map.</p>
      );
    }
  }

  handleRemove (id) {
    this.props.removeMarker(id);
  }
}
