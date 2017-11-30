import React, {Component} from 'react';
import Restaurant from './Restaurant.js';


class RestaurantList extends Component {

  render() {
  	const list = this.props.venues.map((venue, index) => {
			return (
				<Restaurant key={venue.id}
        index={index}
        restid={venue.id}
        onLoggedIn={this.props.onLoggedIn} showFavourites={this.props.showFavourites} onDelFavourite={this.props.onDelFavourite} onAddFavourite={this.props.onAddFavourite}/>
			)
		})

  const message = this.props.showFavourites ?
  <span><h2 className="favourite-venues">Your Favourite Vegetarian Restaurants</h2></span> :
  <span><h2 className="venue-suggestions">Vegetarian Restaurants In Your Area</h2></span>

  return (
    <div>
      {message}
      <ol className="restaurant-list">
        {list}
      </ol>
      <hr />
     </div>
    );
  }
}

export default RestaurantList;
