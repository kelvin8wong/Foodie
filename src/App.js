import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import superagent from 'superagent';
import RestaurantList from './RestaurantList.js';

class App extends Component {
  constructor(){
		super()
		this.state = {
			venues: []
		}
	}

  componentDidMount(){
    console.log('componentDidMount')

		const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=FERSEHDMQU451JXRY1QN5OULADS41SKGR4NWOTNFTIT4HOFS&client_secret=AMJOPX04B0YKCJ34CZ1EN2R5CEFCXIRKPTPXWHU4QE51RSIS'

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {

      const venues = response.body.response.venues
      console.log(JSON.stringify(venues))

      this.setState({
        venues: venues
      })
    })

  }
  render() {

    const markers = [
      {
        location:{
          lat: 49.2827, lng: -123.1207
        }
      },
      {
        location:{
          lat: 49.1999338615338, lng: -123.1207
        }
      }
    ]

    return (
      <div className="App">
        <div className="map-column">
          <Map
            markers={markers}
            center={{ lat: 49.2827, lng: -123.1207 }}
            zoom={14}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className="search-column">
          <RestaurantList venues={this.state.venues} />
        </div>
      </div>
    );
  }
}

export default App;
