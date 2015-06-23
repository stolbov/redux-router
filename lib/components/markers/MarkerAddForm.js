import React, { Component, PropTypes } from 'react';

const emptyFields = {
  x: "",
  y: "",
  color: ""
};

export default class MarkerAddForm extends Component {
  static propTypes = {
    addMarker: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = { ...emptyFields };
  }

  render () {
    return (
      <div style={{ backgroundColor: "#F0F0F0" }}>
        <h3>Add new marker</h3>
        <p>
          <label>X:</label>
          <input
            type="text"
            value={ this.state.x }
            onChange={ ::this.handleXinputChange }
          />
        </p>
        <p>
          <label>Y:</label>
          <input
            type="text"
            value={ this.state.y }
            onChange={ ::this.handleYinputChange }
          />
        </p>
        <p>
          <label>Color:</label>
          <input
            type="text"
            value={ this.state.color }
            onChange={ ::this.handleColorInputChange }
          />
        </p>
        <button onClick={ ::this.handleSubmit }>
          Add marker
        </button>
      </div>
    );
  }

  handleXinputChange (event) {
    this.setState({ x: event.target.value });
  }

  handleYinputChange (event) {
    this.setState({ y: event.target.value });
  }

  handleColorInputChange (event) {
    this.setState({ color: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    const { x, y, color } = this.state;
    const newMarkerData = { x, y, color };
    this.props.addMarker(newMarkerData);
    this.setState({ ...emptyFields });
  }
}
