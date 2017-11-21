import React, { Component } from 'react';
class Restaurant extends Component {

  render() {
    const restaurant = this.props.restaurant
    console.log(restaurant)

    return (
      <main className="restaurant-list">
        <div className="Box01">
          <span className="picture">Picture</span>
          <p><span className="name">{restaurant.name}</span></p>
        </div>

        <div className="Box02">
          <p><span className="address">{restaurant.location.formattedAddress[0]}</span></p>
          <p><span className="city">{restaurant.location.formattedAddress[1]}</span></p>
          <p><span className="country">{restaurant.location.formattedAddress[2]}</span></p>
          <p><span className="phone">{restaurant.contact.formattedPhone}</span></p>
          <p><span className="site">{restaurant.url}</span></p>
        </div>

        <div className="Box03">
          <p><span className="name_member">member name</span></p>
          <p><span className="opinion">opinion</span></p>
          <p><span className="rating">rating</span></p>
          <p><span className="price">price</span></p>
        </div>
      </main>
    );
  }
}

export default Restaurant;