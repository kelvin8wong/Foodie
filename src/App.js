import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js';

class App extends Component {
  render() {
     
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="map-column">
          <Map 
            isMarkerShown
            center={{ lat: 49.2827, lng: -123.1207 }}
            zoom={14}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
