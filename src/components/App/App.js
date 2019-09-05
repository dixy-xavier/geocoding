import React, { Component } from 'react';
import { GET_GOOGLE_LOCATION } from '../../constants/urls';
import { replaceParams, request } from '../../utils/utils';
import Dialog from '../Dialog/Dialog';
import EditContainer from '../EditContainer/EditContainer';
import MapContainer from '../MapContainer/MapContainer';
import Toast from '../Toast/Toast';
import styles from './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
      markers: [],
      error: ''
    }
  }

  toggleDialog = (show, data) => this.setState({ showDialog: show, dialogData: data });

  addMarker = ({ latitude, longitude }) => {
    if (isNaN(latitude) || isNaN(longitude)) {
      this.setState({ error: 'Not a valid latitude/longitude' })
    } else {
      request(replaceParams(GET_GOOGLE_LOCATION, { latlng: `${latitude},${longitude}`, key: this.props.apiKey })).then(data => {
        if (data.status === 'OK') {
          const markers = [...this.state.markers];
          markers.push({
            id: Math.random(),
            title: data?.results?.[0]?.formatted_address,
            latitude: data?.results?.[0]?.geometry?.location.lat,
            longitude: data?.results?.[0]?.geometry?.location.lng,
          });
          this.setState({ markers, showDialog: false });
        } else this.setState({ error: 'Not a valid latitude/longitude' })
      });
    }
  };

  deleteMarker = id => {
    const markers = [...this.state.markers];
    const index = markers.findIndex(marker => marker.id === id);
    markers.splice(index, 1);
    this.setState({ markers });
  };

  render() {
    const { dialogData, error, markers, showDialog } = this.state;
    const { apiKey } = this.props;
    return (
      <div className={styles.container}>
        {!!error && <Toast error={error} />}
        {/*<MapContainer apiKey={apiKey} markers={markers} />*/}
        <EditContainer toggleDialog={this.toggleDialog} markers={markers} deleteMarker={this.deleteMarker} />
        {showDialog && (
          <Dialog
            data={dialogData}
            toggleDialog={this.toggleDialog}
            addMarker={this.addMarker}
          />
        )}
      </div>
    );
  }
}

export default App;
