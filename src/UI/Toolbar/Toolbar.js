import React from 'react';
import styles from './Toolbar.module.css';
import smallLogo from '../../assets/images/smallLogo.png';

const Toolbar = () => (
  <div className={styles.Toolbar}>
    <div className={styles.imgContainer}><img src={smallLogo} alt="logo" /></div>
    <p>Interfaz de monitoreo</p>
  </div>
);

export default Toolbar;