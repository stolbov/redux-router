import React, { Component } from 'react';

export default class RootPanel extends Component {
  render () {
    return (
      <span>
        <h1>RootPanel</h1>
        <div style={{ backgroundColor: '#FAFAFA' }}>
          <h3>Other children:</h3>
          { this.props.children }
        </div>
      </span>
    );
  }
}
