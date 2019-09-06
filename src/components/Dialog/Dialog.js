import React, { Component } from 'react';
import Button from '../Button/Button';
import styles from './Dialog.css';

class Dialog extends Component {
  render() {
    const { data = {}, toggleDialog, addMarker } = this.props;
    const isEdit = !!Object.keys(data).length;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h3 className={styles.header}>{`${isEdit ? 'Update' : 'Add'} Marker`}</h3>
          <div className={styles.content}>
            <div className={styles.inputWrapper}>
              <label>Latitude</label>
              <input ref={node => this.latitude = node} className={styles.input} defaultValue={data.latitude || ''} />
            </div>
            <div className={styles.inputWrapper}>
              <label>Longitude</label>
              <input ref={node => this.longitude = node} className={styles.input} defaultValue={data.longitude || ''} />
            </div>
          </div>
          <div className={styles.footer}>
            <Button className={styles.primary} onClick={() => addMarker({
              id: data.id,
              guid: data.guid,
              latitude: this.latitude.value,
              longitude: this.longitude.value
            })}>{isEdit ? 'Update' : 'Add'}</Button>
            <Button className={styles.secondary} onClick={() => toggleDialog(false)}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
