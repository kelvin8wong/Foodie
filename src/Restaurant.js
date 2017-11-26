import React, { Component } from 'react';
import { getRestaurantDetail } from './Services/foursquareApi.js';
require('dotenv').config();
class Restaurant extends Component {
  constructor (){
    super();
    this.state = {
    }
  }
  componentDidMount(){
    const restaurantId = this.props.restaurant.id
    getRestaurantDetail(restaurantId).then((response) => {
      const name = response.response.name
      const photo = response.response.bestPhoto
      const location = response.response.location
      const url = response.response.url
      const rating = response.response.rating
      const price = response.response.price.tier
      if (photo) {
        const photoURL = photo.prefix +'64'+ photo.suffix
      } else {
        const photoURL = `https://cdn.images.express.co.uk/img/dynamic/galleries/64x64/311989.jpg`
      }
      this.setState({
        restid: restaurantId,
        name: name,
        imageUrl: photoURL,
        phone: phone, 
        url: url,
        addr1: location.address,
        city: location.city,
        state: location.state,
        country: location.country,
        coordLat: location.lat,
        coordLong: location.lng,
        rating: rating,
        pricetier: price
      })
    })
  }

  addFavourite = (event)=>{
    event.preventDefault()
    const favouriteInfo = {restdata: this.state }
    this.props.onAddFavourite(favouriteInfo)
  }
  render() {

    return (
      <li>
        <hr></hr>
        <div className="restaurant-info">
          <div><img src={this.state.restaurantPhoto}/></div>
          <div><h5><span className="restaurant-name">{this.state.restaurantName}</span></h5></div>
          <div><span className="address">{this.state.restaurantAddress}</span></div>
          <div><span className="city">{this.state.restaurantCity}</span></div>
          <div><span className="country">{this.state.restaurantCountry}</span></div>
          <div><span className="zipCode">{this.state.restaurantZipCode}</span></div>
          <div><span className="phone">{this.state.restaurantPhone}</span></div>
          <div><span className="site">{this.state.restaurant.url}</span></div>
          <button className="favourite inactive" onClick={this.addFavourite}><i class="fa fa-heart"></i></button>
        </div>
      </li>
    );
  }
}

export default Restaurant;
