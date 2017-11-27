  import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RestaurantMap from './RestaurantMap.js';
import superagent from 'superagent';
import RestaurantList from './RestaurantList.js';
import { GoogleApiWrapper } from 'google-maps-react';
import { getRestaurantList } from './Services/foursquareApi.js';

class RestaurantContainer extends Component {

  state = {
      venues: [],
      position: null,
      showFavourites: false
    }

  toggleFavourites() {
    if(this.state.showFavourites) {
      this.showAll();
    } else {
      this.showFavourites();
    }

    this.setState({
      showFavourites: !this.state.showFavourites
    })
  }

  showFavourites() {
    let endPoint = "/req/getMyFavourites";
    fetch(endPoint, {
      method: 'GET',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      credentials: 'include'
    })
    .then((res) => res.json())
    .then((res) => {
      const restaurants = res.map(item => {
        item.location = {
          lat: item.coordLat,
          lng: item.coordLong,
          formattedAddress: ['address', 'city', 'state']
        }
        item.contact = {
          phoneNumber: '12345678'
        }
        item.id = item.restid;
        return item;
      })
      this.setState({
        venues: restaurants
      })
    });
  }

  showAll() {
    const latitude  = this.state.position.coords.latitude;
    const longitude = this.state.position.coords.longitude;

    getRestaurantList(latitude,longitude).then((response) => {
      const venues = response.response.venues
      this.setState({
        venues: venues,
        locating:undefined,
        initialCenter:{lat: latitude, lng: longitude}
      })
    })
  }

  componentDidMount(){
    console.log('componentDidMount')

    const geoFindMe = () => {

      if (!navigator.geolocation){
        return;
      }

      const success = (position) => {
        this.setState({
          position
        }, this.showAll);
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
    console.log(bodydata);
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
      console.log("SHOW ME:",res);
      } else {
      console.log("SHOW MEEEE:",res);
      }
    })
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
          <RestaurantList venues={this.state.venues} onAddFavourite={this.saveFavourite}/>

        <button onClick={ this.toggleFavourites.bind(this) }>Favourtites</button>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_apiKey,
})(RestaurantContainer)
