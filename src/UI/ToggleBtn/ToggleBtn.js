import React from 'react';
import styles from './ToggleBtn.module.css';
import arrowUp from '../../assets/images/arrow-up.svg';

const ToggleBtn = () => {
  return (
    <div className={styles.ToggleBtn}>
      <div>
        <img src={arrowUp} alt="arrow"></img>
      </div>
      <div>
        <img className={styles.rotated} src={arrowUp} alt="arrow"></img>
      </div>
    </div>
  );
}

export default ToggleBtn;