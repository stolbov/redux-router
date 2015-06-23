import React, { Component, PropTypes } from 'react';

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
              <li key={ marker.id }>
                x: { marker.x },
                y: { marker.y },
                color: { marker.color },
                remove:
                <button onClick={ ::this.handleRemove.bind(this, marker.id) }>
                  x
                </button>
              </li>
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
