import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { Component } from 'react';

const mapStyles = {
  flex: '0 0 auto'
};

class MapContainer extends Component {
  render() {
    const { markers } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 52.5200, lng: 13.4050 }}
      >
        {markers.map(({ latitude, longitude }) => (
          <Marker key={latitude + longitude} position={{ lat: latitude, lng: longitude }} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
      apiKey: props.apiKey
  })
)(MapContainer);
