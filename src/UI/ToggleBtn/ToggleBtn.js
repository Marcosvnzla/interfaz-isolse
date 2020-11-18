import React from 'react';
import styles from './ToggleBtn.module.css';
import arrowUp from '../../assets/images/arrow-up.svg';
import arrowDown from '../../assets/images/arrow-down.svg';

const ToggleBtn = (props) => {
  const showClass = props.toggleClass ? 'show' : '';
  const downArrowClass = props.toggleClass ? 'downArrowShow' : '';

  return (
    <button className={styles.ToggleBtn} onClick={props.clicked}>
      <div className={styles[showClass]}>
        <img  src={arrowUp} alt="arrow"></img>
      </div>
      <div className={styles[downArrowClass]}>
        <img src={arrowDown} alt="arrow"></img>
      </div>
    </button>
  );
}

export default ToggleBtn;