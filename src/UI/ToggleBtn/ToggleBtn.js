import React from 'react';
import styles from './ToggleBtn.module.css';
import arrowUp from '../../assets/images/arrow-up.svg';

const ToggleBtn = (props) => {
  return (
    <button className={styles.ToggleBtn} onClick={props.clicked}>
      <div>
        <img src={arrowUp} alt="arrow"></img>
      </div>
      <div>
        <img className={styles.rotated} src={arrowUp} alt="arrow"></img>
      </div>
    </button>
  );
}

export default ToggleBtn;