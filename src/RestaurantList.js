import React, {Component} from 'react';


class RestaurantList extends Component {
	
  render() {
  	const list = this.props.venues.map((venue, i) => {
			return (
				<li key={i}>{venue.name}</li>
			)
		})
  return (
    <div>
      Venues
      <ol>
        {list}
      </ol>
     </div>
    );
  } 
} 

export default RestaurantList;

