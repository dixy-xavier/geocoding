import React from 'react';
import EditContainer from '../EditContainer/EditContainer';
import MapContainer from '../MapContainer/MapContainer';
import styles from './App.css';

const App = () => (
  <div className={styles.container}>
    <MapContainer />
    <EditContainer />
  </div>
);

export default App;
