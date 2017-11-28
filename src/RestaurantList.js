import React, {Component} from 'react';
import Restaurant from './Restaurant.js';


class RestaurantList extends Component {

  render() {
  	const list = this.props.venues.map((venue) => {
			return (
				<Restaurant key={venue.id}
        restid={venue.id}
        onLoggedIn={this.props.status} showFavourites={this.props.showFavourites} onDelFavourite={this.props.onDelFavourite} onAddFavourite={this.props.onAddFavourite}/>
			)
		})

    return (
      <div>
        <span className="button is-primary is-inverted is-outlined" style={{display:this.props.showFavourites ? 'block' : 'none'}}><h2> Favourites Vegetarian Restaurants in Town</h2></span>
        <span className="button is-primary is-inverted is-outlined" style={{display:this.props.showFavourites ? 'none' : 'block'}}><h2> All Top Vegetarian Restaurants in Town</h2></span>

        <hr></hr>
        <ol className="restaurant-list">
          {list}
        </ol>
       </div>
    );
  }
}

export default RestaurantList;
