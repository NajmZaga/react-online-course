import React, { Component } from 'react';

// Component listens to state & props update to re-render
export default class App extends Component {

  // React is a One-Way data binding !== Two ways data binding

  constructor() {
    super();
    this.state = {
      isVisible: true
    }
  }

  handleToggleShow = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleToggleShow }>{ this.state.isVisible ? 'Hide' : 'Show' } image</button>
        <br />
        { this.state.isVisible && <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" width="70%" alt="" /> }
      </div>
    )
  }
}
