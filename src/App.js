import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import Restaurant from './Yelp.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="map-wrapper">
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
        <div className='Restaurant'>
          <Restaurant/>
        </div>
      </div>

    );
  }
}

export default App;
