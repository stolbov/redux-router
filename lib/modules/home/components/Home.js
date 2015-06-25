import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Hello from Home</h2>
        <Link to="/marker-layer">Markers</Link>
        <br />
        <Link to="/cadastre-layer-list">Cadastre</Link>
      </div>
    );
  }
}
