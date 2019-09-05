import React from 'react';
import Button from '../Button/Button';
import Locations from '../Locations/Locations';
import styles from './EditContainer.css';

const EditContainer = ({ toggleDialog, markers, deleteMarker }) => (
  <div className={styles.editContainer}>
    <Button onClick={() => toggleDialog(true)}>Add Marker</Button>
    {markers.length ? (
      <Locations
        toggleDialog={toggleDialog}
        locations={markers}
        deleteMarker={deleteMarker}
      />
    ) : <div>No markers available</div>
    }
  </div>
);

export default EditContainer;
