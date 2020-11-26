import React from 'react';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
  const showClass = props.toggleClass ? 'show' : '';
  const classes = [styles.SideDrawer, styles[showClass]];

  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      {props.children}
    </div>
  );
}

export default sideDrawer;