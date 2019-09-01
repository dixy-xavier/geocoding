import React from 'react';
import styles from './Locations.css';

const ActionButtons = () => (
  <div className={styles.actions}>
    <button className={styles.editButton}>Edit</button>
    <button className={styles.deleteButton}>Delete</button>
  </div>
);

const Location = ({ location }) => (
  <div className={styles.location}>
    <h2 className={styles.locationTitle}>{location.title}</h2>
    <div className={styles.locationDetails}>{location.title}</div>
    <div className={styles.locationDetails}>{`Latitude: ${location.latitude}`}</div>
    <div className={styles.locationDetails}>{`Longitude: ${location.longitude}`}</div>
    <ActionButtons />
  </div>
);

const Locations = ({ locations = [] }) => (
  <div className={styles.locations}>
    {locations.map(location => (
      <Location location={location} />
    ))}
  </div>
);

export default Locations;
