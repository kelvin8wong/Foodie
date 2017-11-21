import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import superagent from 'superagent';
import RestaurantList from './RestaurantList.js';

class App extends Component {
  constructor(){
		super()
		this.state = {
      venues: [],
		}
	}

  componentDidMount(){
    console.log('componentDidMount')
        
    const geoFindMe = () => {
      if (!navigator.geolocation){
        return;
      }
    
      const success = (position) => {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        const foursquareURL = `https://api.foursquare.com/v2/venues/search?v=20140806&ll=${latitude},${longitude}&radius=100000&client_id=FERSEHDMQU451JXRY1QN5OULADS41SKGR4NWOTNFTIT4HOFS&client_secret=AMJOPX04B0YKCJ34CZ1EN2R5CEFCXIRKPTPXWHU4QE51RSIS&categoryId=4bf58dd8d48988d1d3941735`
        superagent
        .get(foursquareURL)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {
    
          const venues = response.body.response.venues
          console.log(this)
          
          this.setState({
            venues: venues,
            locating:undefined
          })
        })
      }
    
      const error = () => {
        this.setState({
          locating: undefined,
          error: "Unable to retrieve your location"
        });
      }

      this.setState({
        locating: true,
        error: undefined
      });

      navigator.geolocation.getCurrentPosition(success, error);
    }
    geoFindMe()
  }

  render() {
    const output = !navigator.geolocation ? <p>No Geolocation</p>:
      this.state.error ? <p>{this.state.error}</p> :
      this.state.locating ? <p>Locating...</p> : <Map 
      markers={this.state.venues}
      center={{ lat: 49.2827, lng: -123.1207 }}
      zoom={14}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />

    return (
      <div className="App">
        <div className="map-column">
          {output}
        </div>
        <div className="search-column">
          <RestaurantList venues={this.state.venues} />
        </div>
        <div className="search-column">
          <RestaurantList venues={this.state.venues} />
        </div>
      </div>
    );
  }
}


export default App;
