import React, { Component } from 'react';
import Dialog from '../Dialog/Dialog';
import EditContainer from '../EditContainer/EditContainer';
import MapContainer from '../MapContainer/MapContainer';
import styles from './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
    }
  }

  toggleDialog = (show, data) => this.setState({ showDialog: show, dialogData: data });

  render() {
    const { dialogData, showDialog } = this.state;
    return (
      <div className={styles.container}>
        {/*<MapContainer />*/}
        <EditContainer toggleDialog={this.toggleDialog} />
        {showDialog && <Dialog data={dialogData} toggleDialog={this.toggleDialog} />}
      </div>
    );
  }
}

export default App;
