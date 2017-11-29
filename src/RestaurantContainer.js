import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RestaurantMap from './RestaurantMap.js';
import RestaurantList from './RestaurantList.js';
import { GoogleApiWrapper } from 'google-maps-react';
import { getRestaurantList } from './Services/foursquareApi.js';
import Loading from './loading.js';

class RestaurantContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      venues: [],
      venuesId: [],
      favIDs: props.favIDs,
      position: null,
      showFavourites: false
    }
  }

  toggleFavourites() {
    if(this.state.showFavourites) {
      this.showAll();
    } else {
      this.showMyFavourites(this.state.venuesId);
    }

    this.setState({
      showFavourites: !this.state.showFavourites
    })
  }

  showMyFavourites(info) {
    const self = this
    let endPoint = "/req/getMyFavourites";
    let bodydata = JSON.stringify({restArr: info});
    console.log("bodydata ", bodydata)
    fetch(endPoint, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      credentials: 'include',
      body: bodydata
    })
    .then((res) => res.json())
    .then((res) => {
      const restaurants = res.map(item => {
        item.location = {
          lat: item.coordLat,
          lng: item.coordLong,
          formattedAddress: [ item.addr1 , item.city, item.country, item.zipCode ]
        }
        item.contact = {formattedPhone: item.phone};
        item.id = item.restid;
        console.log("chg rest obj: ", item);
        return item;
      })
      console.log('bringing fav', restaurants);
      // self.state.venues = [];
      self.setState({venues: restaurants });
      console.log('state' , self.state.venues);
    });
  }

  showAll() {
    const latitude  = this.state.position.coords.latitude;
    const longitude = this.state.position.coords.longitude;

    this.setState({
      venues: []
    });

    getRestaurantList(latitude,longitude).then((response) => {
      const venues = response.response.venues;
      this.state.venuesId = [];
      venues.forEach( (elem) => {
        this.state.venuesId.push(elem.id);
      })
      this.setState({
        venues: venues,
        locating:undefined,
        initialCenter:{lat: latitude, lng: longitude}
      });
      //callback to set state in super container with collected venuesId
      this.props.onRestLoad(this.state.venuesId);
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
      if (res == "1") {
      console.log("Favourites Add",res);
       this.setState({favIDs[info.restid]: "1"}); 
      } else {
      console.log("Favourites not Added:",res);
      }
    })
  }

  unSaveFavourite(info){
    let endPoint = "/req/selDel";
    let bodydata = JSON.stringify({memberrest: info})
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
      if (res == "1") {
        console.log("Favourites deleted:",res);
        delete this.state.favIDs[info];
        this.showMyFavourites(this.state.venuesId);
      } else {
        console.log("Favourites NOT deleted:",res);
      }
    })
  }


  render() {
    const output = !navigator.geolocation ? <p>No Geolocation</p>:
      this.state.error ? <p>{this.state.error}</p> :
      this.state.locating ? <Loading className="loading-map"/> :
      <RestaurantMap google={this.props.google} venues={this.state.venues} initialCenter={this.state.initialCenter}/>

    return (
      <div className="RestaurantContainer">
        <div className="map-column">
          {output}
        </div>
        <div className="search-column">

          { this.props.onLoggedIn && <button onClick={this.toggleFavourites.bind(this)}>Favourites</button> }
          <RestaurantList onLoggedIn={this.props.onLoggedIn} showFavourites={this.state.showFavourites} venues={this.state.venues} onDelFavourite={this.unSaveFavourite.bind(this)} onAddFavourite={this.saveFavourite.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_apiKey,
})(RestaurantContainer)
