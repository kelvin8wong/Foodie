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
    const self = this
    const restaurantId = this.props.restid
    getRestaurantDetail(restaurantId).then((response) => {
      const name = response.response.venue.name
      const photo = response.response.venue.bestPhoto
      const location = response.response.venue.location
      const url = response.response.venue.url
      const rating = response.response.venue.rating
      const price = response.response.venue.price.tier
      const phone = response.response.venue.contact.formattedPhone
      if (photo) {
        var photoURL = photo.prefix +'100'+ photo.suffix
      } else {
         photoURL = `https://media1.fdncms.com/boiseweekly/imager/u/square/3608151/bob_rc_dining_mazzah01_kh.jpg`
      }
      self.setState({
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

  addFavouriteButton = () => {
    return <input className="btn btn-success" onClick={this.addFavourite} type="submit" value="Add to Favourites"/>
  }

  removeFavouriteButton = () => {
    return <input className="btn btn-success" onClick={this.delFavourite} type="submit" value="Remove from Favourite"/>
  }

  render() {
    return (
      <li>
        <div className="restaurant-info">
        <hr />
        <span className="restaurant-order">{ this.props.index + 1}</span>

          <div className="restaurant-pic">
            <div><img src={this.state.imageUrl}/></div>
          </div>
          <div className="restaurant-details">
            <div><span className="restaurant-rating">{this.state.rating}</span></div>
            <div><h3><span className="restaurant-name"><a href={this.state.url} target="_blank">{this.state.restname}</a></span></h3></div>
            <div><span className="restaurant-price">{this.state.pricetier}</span></div>
            <div className="restaurant-address">
              <span className="address">{this.state.addr1}, </span>
              <span className="city">{this.state.city}, </span>
              <span className="zipCode">{this.state.zipCode}, </span>
              <span className="country">{this.state.country}</span>
            </div>
              <div><span className="phone">{this.state.phone}</span></div>
          </div>
          { this.props.onLoggedIn && (this.props.showFavourites ? this.removeFavouriteButton() : this.addFavouriteButton()) }
        </div>
      </li>
    );
  }
}

export default Restaurant;
