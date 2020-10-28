import React from 'react';
import styles from './Toolbar.module.css';
import fullLogo from '../../assets/images/logo.png';

const Toolbar = () => (
  <div className={styles.Toolbar}>
    <div className={styles.imgContainer}><img src={fullLogo} alt="logo" /></div>
    <p>Interfaz de monitoreo</p>
  </div>
);

export default Toolbar;