import React, { Component } from 'react';
import { Container } from './components/Container';
import './App.css';
import { AppContextProvider, Consumer } from './components/Context';

export default class App extends Component {

  render() {
    return (
      <AppContextProvider>
        <Consumer>
          {
            (data) => (
              <Container
                theme={ data.theme }
                onChangeTheme={ data.themeUpdater }
              />
            )
          }
        </Consumer>
      </AppContextProvider>
    )
  }
}
