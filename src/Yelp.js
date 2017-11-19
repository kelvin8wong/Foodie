import React, { Component } from 'react';

const Yelp = require('node-yelp-api-v3');
const yelp = new Yelp({
  consumer_key: '',
  consumer_secret: ''
});


class Restaurant extends Component {

  // constructor ( ){
  //   super()
  //   this.state = {
  //     yelp: null
  //   }
  // }

  // let params = {
  //       query: 'food',
  //       location: '51.5007,0.1246',
  //       price: '2',
  //       limit: 10
  //   }

  //   yelp.search(params)
  //    .then(data => data)
  //    .catch(err => err)


  render() {
    return (
      <main className="Yelp">
        <div className="Box01">
          <span className="picture">Picture</span>
          <span className="name">Name Name Name Name</span>
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