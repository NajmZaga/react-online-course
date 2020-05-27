import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import Navigation from './components/Navigation';

export default class App extends Component {

  render() {

    return (
      <Router>
        <Navigation />
        <Routes />
      </Router>
    )
  }
}
