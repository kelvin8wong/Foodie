import React, { Component } from 'react';
import superagent from 'superagent';
class Restaurant extends Component {
  constructor (){
    super();
    this.state = {
     restaurantPhoto: ''
    }
  }
  componentDidMount(){
    const foursquarePhotoURL = `https://api.foursquare.com/v2/venues/${this.props.restaurant.id}/photos?client_id=FERSEHDMQU451JXRY1QN5OULADS41SKGR4NWOTNFTIT4HOFS&client_secret=AMJOPX04B0YKCJ34CZ1EN2R5CEFCXIRKPTPXWHU4QE51RSIS&v=20171018`
    superagent
    .get(foursquarePhotoURL)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {
      console.log(response)
      const photo = response.body.response.photos.items[0]
      if (photo) {
        const photoURL = photo.prefix +'64'+ photo.suffix
        this.setState({
          restaurantPhoto: photoURL
        })
      } else {
        const randomPhotoURL = `https://cdn.images.express.co.uk/img/dynamic/galleries/64x64/311989.jpg`
        this.setState({
          restaurantPhoto: randomPhotoURL
        })
      }
    })
  }
  render() {
    const restaurant = this.props.restaurant

    return (
      <ol>
        <div className="restaurant-info">
          <div><img src={this.state.restaurantPhoto}/></div>
          <div><h5><span className="restaurant-name">{restaurant.name}</span></h5></div>
          <div><span className="address">{restaurant.location.formattedAddress[0]}</span></div>
          <div><span className="city">{restaurant.location.formattedAddress[1]}</span></div>
          <div><span className="country">{restaurant.location.formattedAddress[2]}</span></div>
          <div><span className="phone">{restaurant.contact.formattedPhone}</span></div>
          <div><span className="site">{restaurant.url}</span></div>
        </div>
        <div className="review">
        </div>
      </ol>
    );
  }
}

export default Restaurant;
