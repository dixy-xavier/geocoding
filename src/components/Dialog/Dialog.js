import React from 'react';
import Button from '../Button/Button';
import styles from './Dialog.css';

const Dialog = ({ data = {}, toggleDialog }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h3 className={styles.header}>Add Marker</h3>
      <div className={styles.content}>
        <div className={styles.inputWrapper}>
          <label>Latitude</label>
          <input className={styles.input} value={data.latitude || ''} />
        </div>
        <div className={styles.inputWrapper}>
          <label>Longitude</label>
          <input className={styles.input} value={data.longitude || ''} />
        </div>
      </div>
      <div className={styles.footer}>
        <Button className={styles.primary}>Add</Button>
        <Button className={styles.secondary} onClick={() => toggleDialog(false)}>Cancel</Button>
      </div>
    </div>
  </div>
);

export default Dialog;
