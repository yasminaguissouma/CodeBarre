import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BarCodeForm = require('./barcodeform').default;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Impression Etiquettes Clients</h2>
        </div>
        <p className="App-intro">

        </p>
          <BarCodeForm> </BarCodeForm>


      </div>
    );
  }
}

export default App;
