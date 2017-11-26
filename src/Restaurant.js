import React, { Component } from 'react';
import { getRestaurantDetail } from './Services/foursquareApi.js';
require('dotenv').config();
class Restaurant extends Component {
  constructor (){
    super();
    this.state = {
      restid: '',
      name: '',
      imageUrl: '',
      phone: '',
      url: '',
      addr1: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      coordLat: '',
      coordLong: '',
      rating: '',
      pricetier: ''
    }
  }
  componentDidMount(){
    const restaurantId = this.props.restaurant.id
    getRestaurantDetail(restaurantId).then((response) => {
      const name = response.response.venue.name
      const photo = response.response.venue.bestPhoto
      const location = response.response.venue.location
      const url = response.response.venue.url
      const rating = response.response.venue.rating
      const price = response.response.venue.price.tier
      const phone = response.response.venue.contact.formattedPhone
      if (photo) {
        var photoURL = photo.prefix +'64'+ photo.suffix
      } else {
         photoURL = `https://cdn.images.express.co.uk/img/dynamic/galleries/64x64/311989.jpg`
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
        zipCode: location.postalCode,
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
          <div><img src={this.state.imageUrl}/></div>
          <div><h5><span className="restaurant-name">{this.state.name}</span></h5></div>
          <div><span className="address">{this.state.addr1}</span></div>
          <div><span className="city">{this.state.city}</span></div>
          <div><span className="country">{this.state.country}</span></div>
          <div><span className="zipCode">{this.state.zipCode}</span></div>
          <div><span className="phone">{this.state.phone}</span></div>
          <div><span className="site">{this.state.url}</span></div>
          <input className="button is-primary is-inverted is-outlined" onClick={this.addFavourite} type="submit" value="Submit"/>
{/*          <a className="btn" onClick={this.addFavourite}><i className="fa fa-heart"></i></a>
*/}        </div>
        <div className="review">
        </div>
      </li>
    );
  }
}

export default Restaurant;
