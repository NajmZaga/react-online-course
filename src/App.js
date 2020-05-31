import React, { Component } from 'react';
import './App.css';
import Facture from './components/Facture';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isBoolean: true,
      isString: "Hello there",
      isNumber: 124
    }
  }

  render() {
    return (
      <div>
        <Facture
          username="Jihen"
        />
      </div>
    )
  }
}

export default App;
