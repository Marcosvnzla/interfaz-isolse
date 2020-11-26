import React from 'react';
import styles from './Toolbar.module.css';
import smallLogo from '../../assets/images/smallLogo.png';
import fullLogo from '../../assets/images/fullLogo.png';

const Toolbar = () => {
  return (
    <div className={styles.Toolbar}>
      <div className={styles.imgContainer}><img src={smallLogo} alt="logo" /></div>
    </div>
  );
}
export default Toolbar;