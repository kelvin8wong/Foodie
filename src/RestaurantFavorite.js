import React, { Component } from 'react';

class RestaurantFavorites extends Component {
  constructor (){
    super();
    this.state = {
      venues: []
      // restid:     "",
      // url:        "",
      // imageUrl:   "",
      // rating:     "",
      // phone:      "",
      // coordLong:  "",
      // coordLat:   "",
      // city:       "",
      // country:    "",
      // addr2:      "",
      // addr3:      "",
      // state:      "",
      // addr1:      "",
      // zipCode:    "",
      // member:     "",
      // password:   "",

    }
  }
  // componentDidMount(){
  //   const restaurantId = this.props.restaurant.id
  //   getRestaurantPhoto(restaurantId).then((response) => {
  //     const photo = response.response.photos.items[0]
  //     if (photo) {
  //       const photoURL = photo.prefix +'64'+ photo.suffix
  //       this.setState({
  //         restaurantPhoto: photoURL
  //       })
  //     } else {
  //       const randomPhotoURL = `https://cdn.images.express.co.uk/img/dynamic/galleries/64x64/311989.jpg`
  //       this.setState({
  //         restaurantPhoto: randomPhotoURL
  //       })
  //     }
  //   })
  // }


  getFavoriteRestaurant (getParams) {
    let endPoint = "/req/getMyFavourites";
    return fetch(endPoint, {
      method: 'GET',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
  }


  render() {
    // const restaurant = this.props.restaurants
    // const member = this.props.
    // onde e como devo colocar o if e chamar a funcao getRestaurant ??


    return (
      <li>
        <hr></hr>
        <div className="restaurant-info">
          <div><img src={restaurants.imageUrl}/></div>
          <div><h5><span className="restaurant-name">{restaurants.restname}</span></h5></div>
          <div><span className="address1">{restaurants.addr1}</span></div>
          <div><span className="address2">{restaurants.addr2}</span></div>
          <div><span className="address3">{restaurants.addr3}</span></div>
          <div><span className="city">{restaurants.city}</span></div>
          <div><span className="">{restaurants.zipCode}</span></div>
          <div><span className="country">{restaurants.country}</span></div>
          <div><span className="phone">{restaurants.phone}</span></div>
          <div><span className="site">{restaurants.url}</span></div>
          <div><span className="review">{restaurants.pricetier}</span></div>
        </div>
      </li>
    );
  }
}

export default RestaurantFavorites;
