import React, { Component } from 'react';
import { getRestaurantDetail } from './Services/foursquareApi.js';

class Restaurant extends Component {
  constructor (){
    super();
    this.state = {
      restid: '',
      restname: '',
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
      pricetier: '',
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
        restname: name,
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

  delFavourite = (event)=>{
    event.preventDefault()
    const favouriteInfo = this.state.restid;
    this.props.onDelFavourite(favouriteInfo)
  }


  render() {

    return (
      <li>
        <div className="restaurant-info">
        <hr></hr>
          <div className="restaurant-pic">
            <div><img src={this.state.imageUrl}/></div>
          </div>
          <div className="restaurant-details">
            <div><span className="restaurant-rating">{this.state.rating}</span></div>
            <div><h5><span className="restaurant-name">{this.state.restname}</span></h5></div>
            <div><span className="restaurant-price">{this.state.pricetier}</span></div>
            <div className="restaurant-address">
              <span className="address">{this.state.addr1}, </span>
              <span className="city">{this.state.city}, </span>
              <span className="zipCode">{this.state.zipCode}, </span>
              <span className="country">{this.state.country}</span>

            </div>
              <div><span className="phone">{this.state.phone}</span></div>
              <div><span className="site">{this.state.url}</span></div>
          </div>
          <input className="button is-primary is-inverted is-outlined" style={{display:this.props.showFavourites ? 'none' : 'blocl'}} onClick={this.addFavourite} type="submit" value="Add to Favourites"/>
          <input className="button is-primary is-inverted is-outlined" style={{display:this.props.showFavourites ? 'block' : 'none'}} onClick={this.delFavourite} type="submit" value="Remove from Favourite"/>
        </div>
      </li>
    );
  }
}

export default Restaurant;
