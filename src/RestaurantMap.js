import React, { Component } from 'react';
import { Map, Marker, InfoWindow  } from 'google-maps-react';

export default class RestaurantMap extends Component {

  constructor (){
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      zoom: 14
    }
  }

 onMarkerClick = (props, marker, e) => {
    const venue = this.props.venues.find(x=>x.id === props.id);

    console.log('Clicked on', venue);
    this.setState({
      selectedPlace: venue,
      activeMarker: marker,
      showingInfoWindow: true,
      zoom: 18
    });
  }

  onMouseover = (props, marker, e) => {
    const venue = this.props.venues.find(x=>x.id === props.id);
    this.setState({
      selectedPlace: venue,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null,
      zoom: 14
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        zoom: 14
      })
    }
  }

  renderMarkers() {
    console.log(this.props.venues)
    return this.props.venues.map( (venue) => {

      const { id: key, location: { lat, lng }} = venue;
      return <Marker onMouseover={this.onMarkerMouseover} onClick={this.onMarkerClick} position={{lat, lng}}
        id={key}
        key={key}
        icon={{url: "https://cdn2.iconfinder.com/data/icons/restaurant-1/100/vegan_food_meal_dinner_lunch_restaurant_vegetables-32.png"}}
      />
    });
  }
  renderCurrentPosition (){
    const  { lat, lng } = this.props.initialCenter
    return 
    <Marker position={{lat, lng}}/>
  } 

  render() {

    const { name,url, contact = {}, location = {} } = this.state.selectedPlace;
    const { formattedAddress = [] } = location;
    const address = formattedAddress.join(' ');
    const { formattedPhone } = contact;

    return (
          <Map
            zoom={this.state.zoom}
            initialCenter={this.props.initialCenter}
            google={this.props.google} onClick={this.onMapClicked}>
            { this.renderMarkers() }

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow} onClose={this.onInfoWindowClose}>
                <div>
                  <h5>{name}</h5>
                  <div>Address: {address}</div>
                  <div>Phone: {formattedPhone || 'N/A'}</div>
                  <a href={url} target="_blank">{url}</a>
                </div>
            </InfoWindow>
          </Map>
    );
  }
}


