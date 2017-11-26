import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RestaurantMap from './RestaurantMap.js';
import superagent from 'superagent';
import RestaurantList from './RestaurantList.js';
import { GoogleApiWrapper } from 'google-maps-react';
import { getRestaurantList } from './Services/foursquareApi.js';
require('dotenv').config();
class RestaurantContainer extends Component {

  state = {
    venues: [],
    position: null,
    showFavorites: false
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
        getRestaurantList(latitude,longitude).then((response) => {
          const venues = response.response.venues
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
  saveFavourite(info){
    let endPoint = "/req/selAdd";
    let bodydata = JSON.stringify(info);
    return fetch(endPoint, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: bodydata
    })
    .then(res => res.json())
    .then((res) => {
      if (res === "0") {
        // Going to Login ****************************
        this.login({username: signupParams.member, password: signupParams.password });
      } else {
        console.log("registered before - choose another username");
      }
    })
  }

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
          <RestaurantList onAddFavourite={this.saveFavourite} venues={this.state.venues} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_apiKey,
})(RestaurantContainer)
