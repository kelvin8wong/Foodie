import React, { Component } from 'react';
class Restaurant extends Component {

  render() {
    const restaurant = this.props.restaurant 
    console.log(restaurant)

    return (
      <main className="restaurant-list">
        <div className="Box01">
          <span className="picture">Picture</span>
          <span className="name">{restaurant.name}</span>
          <span className="rating">rating rating</span>
          <span className="price">price</span>
        </div>

        <div className="Box02">
          <span className="city">city city</span>
          <span className="address">address address address address address address address address </span>
          <span className="code">code code</span>
          <span className="phone">phone phone</span>
        </div>

        <div className="Box03">
          <span className="name_member">member name</span>
          <span className="opinion">opinion opinion opinion opinion opinion opinion opinion opinion opinion opinion opinion</span>
        </div>
      </main>
    );
  }
}

export default Restaurant;