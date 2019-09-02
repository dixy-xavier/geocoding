import classNames from 'classnames';
import React from 'react';
import styles from './Button.css';

const Button = ({ onClick = f => f, children, className }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>{children}</button>
);

export default Button;
