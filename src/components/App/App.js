import React, { Component } from 'react';
import { ACTION_ON_MARKER, MARKERS } from '../../constants/urls';
import { callGAPI, generateKey, replaceParams, request } from '../../utils/utils';
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
      error: '',
      dialogData: {}
    }
  }

  componentDidMount() {
    request(MARKERS).then(data => this.setState({ markers: data }));
  }

  toggleDialog = (show, data) => this.setState({ showDialog: show, dialogData: data });

  showToast = () => {
    this.setState({ error: 'Not a valid latitude/longitude' });
    setTimeout(() => this.setState({ error: '' }), 3000);
  };

  addMarker = ({ latitude, longitude, id, guid }) => {
    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
      this.showToast();
    } else {
      const isEdit = !!id;
      callGAPI({ latitude, longitude, key: this.props.apiKey }).then(data => {
        if (data.status === 'OK') {
          const body = {
            guid: isEdit ? guid : generateKey(),
            title: data?.results?.[0]?.formatted_address,
            latitude: data?.results?.[0]?.geometry?.location.lat,
            longitude: data?.results?.[0]?.geometry?.location.lng,
          };
          if (isEdit) {
            request(replaceParams(ACTION_ON_MARKER, { id }), { method: 'PUT', body: JSON.stringify(body) }).then(data => {
              const markers = [...this.state.markers];
              const index = markers.findIndex(marker => marker.id === id);
              markers.splice(index, 1, data);
              this.setState({ markers, showDialog: false, dialogData: {} });
            });
          } else {
            request(MARKERS, { method: 'POST', body: JSON.stringify(body) }).then(data => {
              const markers = [...this.state.markers];
              markers.push(data);
              this.setState({ markers, showDialog: false, dialogData: {} });
            });
          }
        } else this.showToast();
      });
    }
  };

  deleteMarker = id => {
    request(replaceParams(ACTION_ON_MARKER, { id }), { method: 'DELETE' }).then(() => {
      const markers = [...this.state.markers];
      const index = markers.findIndex(marker => marker.id === id);
      markers.splice(index, 1);
      this.setState({ markers });
    });
  };

  render() {
    const { dialogData, error, markers, showDialog } = this.state;
    const { apiKey } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <MapContainer apiKey={apiKey} markers={markers} />
        </div>
        <EditContainer toggleDialog={this.toggleDialog} markers={markers} deleteMarker={this.deleteMarker} />
        {showDialog && (
          <Dialog
            data={dialogData}
            toggleDialog={this.toggleDialog}
            addMarker={this.addMarker}
          />
        )}
        {!!error && <Toast error={error} />}
      </div>
    );
  }
}

export default App;
