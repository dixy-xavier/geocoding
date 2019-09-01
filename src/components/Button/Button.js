import React from 'react';
import styles from './Button.css';

const Button = ({ onClick = f => f }) => (
  <button className={styles.button} onClick={onClick}>Add Map</button>
);

export default Button;
