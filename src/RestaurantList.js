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
      Venues
      <li>
        {list}
      </li>
     </div>
    );
  }
}

export default RestaurantList;
