import React, { Component, createContext } from 'react';

/**
 * Extract Provider and Consumer components from context
 */
export const { Provider, Consumer } = createContext();

export class AppContextProvider extends Component {

  constructor() {
    super();
    this.state = {
      theme: localStorage.getItem('theme') || 'light',
      themeUpdater: () => {
        const theme = this.state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        this.setState({
          ...this.state,
          theme
        });
      }
    }
  }

  render() {
    return (
      <Provider value={ this.state }>
        { this.props.children }
      </Provider>
    )
  }
}
