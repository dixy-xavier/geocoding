import React from 'react';
import styles from './Toast.css';

const Toast = ({ error = 'Something went wrong' }) => (
  <div className={styles.toastContent}>
    <div className={styles.toast}>
      {error}
    </div>
  </div>
);

export default Toast;
