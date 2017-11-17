import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js';

class App extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style} className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default App;
