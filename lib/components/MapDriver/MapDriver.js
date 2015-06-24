import React, { Component, PropTypes } from 'react';

const DEFAULT_CANVAS_WIDTH = 300;
const DEFAULT_CANVAS_HEIGHT = 150;

export default class MapDriver extends Component {
  static PropTypes = {
    //
  }

  constructor (props) {
    super(props);
    this.state = {
      canvasWidth: DEFAULT_CANVAS_WIDTH,
      canvasHeight: DEFAULT_CANVAS_HEIGHT
    };
  }

  componentDidMount () {
    this.handleResize();
    window.addEventListener('resize', ::this.handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', ::this.handleResize);
  }

  render () {
    return (
      <div style={{
        width: '60%', height: '100%',
        float: 'left',
        backgroundColor: 'lightgrey'
      }}>
        <canvas
          style={{ width: '100%', height: '100%' }}
          ref="canvas"
          width={ this.state.canvasWidth }
          height={ this.state.canvasHeight }
        >
          Canvas is not available on your browser.
        </canvas>
      </div>
    );
  }

  handleResize () {
    const node = React.findDOMNode(this.refs.canvas);
    const { clientWidth, clientHeight } = node;
    this.setState({
      canvasWidth: clientWidth,
      canvasHeight: clientHeight
    });
  }
}
