import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  width: '50%',
  flex: '0 0 auto'
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 52.5200, lng: 13.4050 }}
      >
        <Marker position={{ lat: 51.3396955, lng: 12.3730747 }} />
        <Marker position={{ lat: 52.5074434, lng: 13.3903913 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAUB5Pef5kA8lgUPrkqwC-frxyxZpKa_wY',
})(MapContainer);
