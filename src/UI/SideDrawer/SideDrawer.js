import React from 'react';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
  return (
    <div className={styles.SideDrawer} onClick={props.clicked}>
      {props.children}
    </div>
  );
}

export default sideDrawer;