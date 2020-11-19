import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => {
  const showClass = props.toggleClass ? 'show' : '';
  const classes = [styles.Backdrop];
  if (showClass) {
    classes.push(styles.show);
  }

  return (
    <div className={classes.join(' ')} onClick={props.clicked}></div>
  );
}

export default backdrop;