import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RestaurantMap from './RestaurantMap.js';
import superagent from 'superagent';
import RestaurantList from './RestaurantList.js';
import { GoogleApiWrapper } from 'google-maps-react';


class RestaurantContainer extends Component {
  
  state = {
      venues: []
    }
  
  componentDidMount(){
    console.log('componentDidMount')
        
    const geoFindMe = () => {
  
      if (!navigator.geolocation){
        return;
      }
    
      const success = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const foursquareURL = `https://api.foursquare.com/v2/venues/search?v=20171123&ll=${latitude},${longitude}&radius=100000&client_id=FERSEHDMQU451JXRY1QN5OULADS41SKGR4NWOTNFTIT4HOFS&client_secret=AMJOPX04B0YKCJ34CZ1EN2R5CEFCXIRKPTPXWHU4QE51RSIS&categoryId=4bf58dd8d48988d1d3941735`
        superagent
        .get(foursquareURL)
        .query(null)
        .set('Accept', 'text/json')
        .end((error, response) => {
    
          const venues = response.body.response.venues
          
          this.setState({
            venues: venues,
            locating:undefined,
            initialCenter:{lat: latitude, lng: longitude}
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
      this.state.locating ? <p>Locating...</p> : 
      <Route path="/" render={(props) =><RestaurantMap google={this.props.google} venues={this.state.venues} initialCenter={this.state.initialCenter} {...props}/> }/>
      
    return (
      <div className="RestaurantContainer">
        <div className="map-column">
          {output}
        </div>
        <div className="search-column">
          <RestaurantList venues={this.state.venues} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.apiKey,
})(RestaurantContainer)