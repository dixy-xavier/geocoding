import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import styles from './Locations.css';

const ActionButtons = ({ toggleDialog, data }) => (
  <div className={styles.actions}>
    <Button className={styles.editButton} onClick={() => toggleDialog(true, data)}>Edit</Button>
    <Button className={styles.deleteButton}>Delete</Button>
  </div>
);

const Location = ({ location, toggleDialog }) => (
  <div className={styles.location}>
    <h2 className={classNames(styles.locationTitle, styles.ellipsis)} title={location.title}>{location.title}</h2>
    <div className={classNames(styles.locationDetails, styles.ellipsis)} title={location.title}>{location.title}</div>
    <div className={classNames(styles.locationDetails, styles.ellipsis)} title={location.latitude}>{`Latitude: ${location.latitude}`}</div>
    <div className={classNames(styles.locationDetails, styles.ellipsis)} title={location.longitude}>{`Longitude: ${location.longitude}`}</div>
    <ActionButtons toggleDialog={toggleDialog} data={{ latitude: location.latitude, longitude: location.longitude }} />
  </div>
);

const Locations = ({ locations = [], toggleDialog }) => (
  <div className={styles.locations}>
    {locations.map(location => (
      <Location key={location.title} location={location} toggleDialog={toggleDialog} />
    ))}
  </div>
);

export default Locations;
