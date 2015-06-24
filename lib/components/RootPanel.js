require('react-gemini-scrollbar/node_modules/gemini-scrollbar/gemini-scrollbar.css');

import React, { Component } from 'react';
import GeminiScrollbar from 'react-gemini-scrollbar';

export default class RootPanel extends Component {
  render () {
    return (
      <div style={{ width: '40%', height: '100%', float: 'left' }}>
        <GeminiScrollbar>
          <div style={{ padding: 10 }}>
            { this.props.children }
          </div>
        </GeminiScrollbar>
      </div>
    );
  }
}
