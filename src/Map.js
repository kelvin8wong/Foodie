import React, { Component } from 'react';
import { withGoogleMap, GoogleMap} from 'react-google-maps'
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
import ReactDOM from 'react-dom'
class Map extends Component {

  constructor (){
    super()
    this.state = {
      map: null,
      isOpen: false,
    }
  }
  
  mapMoved(){
    console.log('mapmoved', JSON.stringify(this.state.map.getCenter()))
  }
  zoomChanged(){
    console.log('zoommoved', this.state.map.getZoom())
  }
  mapLoaded(map){
    if (this.state.map !== null)
      return;
    this.setState({
      map: map
    })
  }

  onToggleOpen() {
    if (this.state.isOpen) 
      this.setState({
        isOpen: false
      })
    else 
      this.setState({
        isOpen: true
      })
  }
  render() {
    const markers = this.props.markers.map((venue, i) => {
      console.log(venue)
    
      return <MapMarker key={i}  position={{ lat: venue.location.lat, lng: venue.location.lng }}  onClick={this.onToggleOpen.bind(this)}>
      {this.state.isOpen && <InfoBox key={i}
      onCloseClick={this.onToggleOpen.bind(this)}> Hello
     
    </InfoBox>}
              </MapMarker>
    })
  
    return (
          <GoogleMap 
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            ref={this.mapLoaded.bind(this)}
            onZoomChanged={this.zoomChanged.bind(this)}
            onDragEnd={this.mapMoved.bind(this)}>
            {markers}
          </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
