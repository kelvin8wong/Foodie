import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

class Map extends Component {

  constructor (){
    super()
    this.state = {
      map: null,
      isOpen: false
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
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }
      return <Marker key={i} {...marker}   onClick={this.onToggleOpen.bind(this)}>
      {this.state.isOpen && <InfoBox
      onCloseClick={this.onToggleOpen.bind(this)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          
        </div>
      </div>
    </InfoBox>}
              </Marker>
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
