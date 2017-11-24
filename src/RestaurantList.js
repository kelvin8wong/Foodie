import React, {Component} from 'react';
import Restaurant from './Restaurant.js';


class RestaurantList extends Component {

  render() {
  	const list = this.props.venues.map((venue, i) => {
			return (
				<Restaurant key={i} restaurant={venue} />
			)
		})
  return (
    <div>
      <h2>Top Vegetarian Restaurnats in Town</h2>
      <ol className="restaurant-list">
        {list}
      </ol>
     </div>
    );
  }
}

export default RestaurantList;
