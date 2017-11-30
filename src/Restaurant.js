import React, { Component } from 'react';
import { getRestaurantDetail } from './Services/foursquareApi.js';
import { Modal, Button} from 'react-bootstrap';
import Comment from './Comment.js';
class Restaurant extends Component {
  constructor (){
    super();
    this.state = {
      commentVisible: false,
      commentDisplay:'',
      favourite: false
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
      }, this.loadComment)
    })
  }

  addFavourite = (event)=>{
    event.preventDefault()
    const favouriteInfo = {
      restdata: {
        restid: this.state.restid,
        restname: this.state.name,
        imageUrl: this.state.imageUrl,
        phone: this.state.phone,
        url: this.state.url,
        addr1: this.state.addr1,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        country: this.state.country,
        coordLat: this.state.coorLat,
        coordLong: this.state.coorLong,
        rating: this.state.rating,
        pricetier: this.state.pricetier
      }
    }
    this.props.onAddFavourite(favouriteInfo);
    this.setState({
      favourite: true
    })
  }

  delFavourite = (event)=>{
    event.preventDefault()
    const favouriteInfo = this.state.restid;
    this.props.onDelFavourite(favouriteInfo)
    this.setState({
      favourite: false
    })
  }

  addFavouriteButton = () => {
    return <Button disabled={this.state.favourite} className="btn btn-success" bsStyle="success" onClick={this.addFavourite}><i className="glyphicon glyphicon-heart"></i></Button>
  }

  removeFavouriteButton = () => {
    return <Button bsStyle="danger" onClick={this.delFavourite}><i className="glyphicon glyphicon-trash"></i></Button>
  }

  showCommmentField = () => {
    return <div><span className="comments">{this.state.commentDisplay}<a className="add-comment" href="javascript:;" onClick={this.showComment}>Comment</a></span></div>
  }
  showEmptyField = () => {
    return <div></div>
  }

  showComment = () => {
    this.setState({
      commentVisible: true
    })
  }
  hideComment = () => {
    this.setState({
      commentVisible: false
    })
  }
  sendComment = (comment) => {
    this.setState({
      commentVisible: false
    })
    let endPoint = "/req/putComments";
    const commentDetail = {memberrest: this.state.restid, comments: comment}
    let bodydata = JSON.stringify(commentDetail);
    fetch(endPoint, {
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      credentials: 'include',
      body: bodydata
    })
    .then((res) => res.json())
    .then((res) => {
      if (res == "1") {
        console.log("Comment Added",res);
      } else {
      console.log("Comment not Added:",res);
      }
    })
    this.loadComment();
  }
  loadComment(){
    const self = this;
    const restid = this.state.restid;
    const commentParams = {memberrest: restid}
    let urlDOM = "http://localhost:3001";
    let endPoint = "/req/getComments";
    let longURL = (urlDOM + endPoint);
    let url = new URL(longURL), params = commentParams;
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    let url1 = url.toString().slice(21);
    return fetch(url1, {
      method: 'GET',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      credentials: 'include'
    })
    .then((res) => res.json())
    .then((res) => {
      console.log('Response Comments:', res)
      this.setState({
        commentDisplay: res.comments
      })
    })
    .catch((err) => {
        return console.log("Error", err)
    })
  }
  switchPriceTier (prices) {
    let priceTag = '';
    switch (prices){
      case 1:
       priceTag = '$';
      break;
      case 2:
        priceTag = '$$';
      break;
      case 3:
        priceTag = '$$$';
      break;
      case 4:
        priceTag = '$$$$';
      break;
    }
    return priceTag;
  }
  render() {
    const comment =  <Modal show={this.state.commentVisible} onHide={this.hideComment}>
      <Comment updateComment={this.sendComment} />
      </Modal>

    return (
      <li>
        <div className="restaurant-info">
        <hr />
        <span className="restaurant-order">{ this.props.index + 1}</span>

          <div className="restaurant-pic">
            <div><img src={this.state.imageUrl}/></div>
          </div>
          <div className="restaurant-details">
            { this.props.onLoggedIn && (this.props.showFavourites ? this.removeFavouriteButton() : this.addFavouriteButton()) }
            <div><span className="restaurant-rating">{this.state.rating}</span></div>
            <div><h3><span className="restaurant-name"><a href={this.state.url} target="_blank">{this.state.restname}</a></span></h3></div>
            <div><span className="restaurant-price">{this.switchPriceTier(this.state.pricetier)}</span></div>
            <div className="restaurant-address">
              <span className="address">{this.state.addr1}, </span>
              <span className="city">{this.state.city}, </span>
              <span className="zipCode">{this.state.zipCode}, </span>
              <span className="country">{this.state.country}</span>
            </div>
            <div><span className="phone">{this.state.phone}</span></div>
            <div> { this.props.onLoggedIn && (this.props.showFavourites ? this.showCommmentField() : this.showEmptyField())} </div>
            <div>{comment}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Restaurant;
