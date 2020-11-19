import React from 'react';
import styles from './SideDrawer.module.css';
import Menu from '../Menu/Menu';

const sideDrawer = () => {
  return (
    <div className={styles.SideDrawer}>
      <Menu />
    </div>
  );
}

export default sideDrawer;