import React, { Fragment } from 'react';
import styles from './MainDisplay.module.css';

const MainDisplay = (props) => {
  return (
    <Fragment>
      <h1 className={styles.Title}>{props.title}</h1>
      <div className={styles.MainDisplay}>
        {props.children}
      </div>
    </Fragment>
  );
}

export default MainDisplay;