import React from 'react';
import Button from '../Button/Button';
import Locations from '../Locations/Locations';
import styles from './EditContainer.css';

const EditContainer = () => (
  <div className={styles.editContainer}>
    <Button />
    <Locations locations={[{
      title: 'Leipzig',
      latitude: '51.3396955',
      longitude: '12.3730747'
    }, {
      title: 'Checkpoint Charlie',
      latitude: '52.5074434',
      longitude: '13.3903913'
    }, {
      title: 'Leipzig',
      latitude: '51.3396955',
      longitude: '12.3730747'
    }, {
      title: 'Checkpoint Charlie',
      latitude: '52.5074434',
      longitude: '13.3903913'
    }, {
      title: 'Leipzig',
      latitude: '51.3396955',
      longitude: '12.3730747'
    }, {
      title: 'Checkpoint Charlie',
      latitude: '52.5074434',
      longitude: '13.3903913'
    }, {
      title: 'Leipzig',
      latitude: '51.3396955',
      longitude: '12.3730747'
    }, {
      title: 'Checkpoint Charlie',
      latitude: '52.5074434',
      longitude: '13.3903913'
    }, {
      title: 'Leipzig',
      latitude: '51.3396955',
      longitude: '12.3730747'
    }, {
      title: 'Checkpoint Charlie',
      latitude: '52.5074434',
      longitude: '13.3903913'
    }, {
      title: 'Leipzig',
      latitude: '51.3396955',
      longitude: '12.3730747'
    }, {
      title: 'Checkpoint Charlie',
      latitude: '52.5074434',
      longitude: '13.3903913'
    }]}/>
  </div>
);

export default EditContainer;
