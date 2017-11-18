import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

class Map extends Component {

  constructor ( ){
    super()
    this.state = {
      map: null
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


  render() {
    return (
          <GoogleMap 
            defaultZoom={this.props.zoom}
            defaultCenter={this.props.center}
            ref={this.mapLoaded.bind(this)}
            onZoomChanged={this.zoomChanged.bind(this)}
            onDragEnd={this.mapMoved.bind(this)}>
            <Marker position={{ lat: -34.397, lng: 150.644 }} />
          </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
