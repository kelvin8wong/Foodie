import React, { Component } from 'react';
class Restaurant extends Component {

  render() {
    const restaurant = this.props.restaurant
    console.log(restaurant)

    return (
      <main className="restaurant-list">
        <hr></hr>
        <div className="Box01">
          <div><span className="picture">Picture</span></div>
          <div><span className="name">{restaurant.name}</span></div>
          <div><span className="rating">rating rating</span></div>
          <div><span className="price">price</span></div>
        </div>

        <div className="Box02">
          <div><span className="address">{restaurant.location.formattedAddress[0]}</span></div>
          <div><span className="city">{restaurant.location.formattedAddress[1]}</span></div>
          <div><span className="country">{restaurant.location.formattedAddress[2]}</span></div>
          <div><span className="phone">{restaurant.contact.formattedPhone}</span></div>
          <div><span className="site">{restaurant.url}</span></div>
        </div>

        <div className="Box03">
          <div><span className="name_member">member name</span></div>
          <div><span className="opinion">opinion</span></div>
          <div><span className="rating">rating</span></div>
          <div><span className="price">price</span></div>
        </div>
      </main>
    );
  }
}

export default Restaurant;
