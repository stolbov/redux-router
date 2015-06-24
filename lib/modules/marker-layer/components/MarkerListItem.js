import React, { Component, PropTypes } from 'react';

export default class MarkerListItem extends Component {
  static propTypes = {
    id: PropTypes.any.isRequired,
    x: PropTypes.any.isRequired,
    y: PropTypes.any.isRequired,
    color: PropTypes.any.isRequired,

    removeMarker: PropTypes.func.isRequired
  }

  render () {
    return (
      <li>
        <button onClick={ ::this.handleRemove.bind(this, this.props.id) }>
          x
        </button>
        { " " }
        X: { this.props.x },
        Y: { this.props.y },
        color: { this.props.color },
      </li>
    );
  }

  handleRemove (id) {
    this.props.removeMarker(id);
  }
}
