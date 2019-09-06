import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import styles from './Locations.css';

const ActionButtons = ({ toggleDialog, data, deleteMarker }) => (
  <div className={styles.actions}>
    <Button className={styles.editButton} onClick={() => toggleDialog(true, data)}>Edit</Button>
    <Button className={styles.deleteButton} onClick={() => deleteMarker(data.id)}>Delete</Button>
  </div>
);

const Location = ({ location, toggleDialog, deleteMarker }) => (
  <div className={styles.location}>
    <h3 className={classNames(styles.locationTitle, styles.ellipsis)} title={location.title}>{location.title}</h3>
    <div className={classNames(styles.locationDetails, styles.ellipsis)} title={location.title}>{location.title}</div>
    <div className={classNames(styles.locationDetails, styles.ellipsis)} title={location.latitude}>{`Latitude: ${location.latitude}`}</div>
    <div className={classNames(styles.locationDetails, styles.ellipsis)} title={location.longitude}>{`Longitude: ${location.longitude}`}</div>
    <ActionButtons toggleDialog={toggleDialog} data={location} deleteMarker={deleteMarker} />
  </div>
);

const Locations = ({ locations = [], toggleDialog, deleteMarker }) => (
  <div className={styles.locations}>
    {locations.map(location => (
      <Location key={location.title} location={location} toggleDialog={toggleDialog} deleteMarker={deleteMarker} />
    ))}
  </div>
);

export default Locations;
