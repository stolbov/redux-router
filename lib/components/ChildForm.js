import React, { Component } from 'react';
import { Connector } from 'redux/react';

function select (state) {
  return { markers: state.mapStore.markers };
}

export default class ChildForm extends Component {
  render () {
    return (
      <Connector select={ select }>
        {
          ({ markers }) => (
            <h4>This is a child form, numMarkers: {markers.length}</h4>
          )
        }
      </Connector>
    );
  }
}
