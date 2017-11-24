import React, { Component } from 'react';
class Restaurant extends Component {

  render() {
    const restaurant = this.props.restaurant

    return (
      <li>
        <div className="restaurant-info">
          <hr></hr>
          <div><h4><span className="restaurant-name">{restaurant.name}</span></h4></div>
          <div><span className="address">{restaurant.location.formattedAddress[0]}</span></div>
          <div><span className="city">{restaurant.location.formattedAddress[1]}</span></div>
          <div><span className="country">{restaurant.location.formattedAddress[2]}</span></div>
          <div><span className="phone">{restaurant.contact.formattedPhone}</span></div>
          <div><span className="site">{restaurant.url}</span></div>
        </div>
        <div className="review">
        </div>
      </li>
    );
  }
}

export default Restaurant;
