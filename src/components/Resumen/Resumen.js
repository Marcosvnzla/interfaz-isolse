import React from 'react';
import styles from './Resumen.module.css';
import MainDisplay from '../MainDisplay/MainDisplay';

const Resumen = (props) => {
  return (
    <MainDisplay title='Resumen'>
        <div className={styles.Resumen}>
          <h2>Comm RF</h2>
          <p>{props.rfState}</p>
        </div>
        <div className={styles.Resumen}>
          <h2>Estado de alarma</h2>
          <p>{props.alarmState}</p>
        </div>
        <div className={styles.Resumen}>
          <h2>Fecha de último evento</h2>
          <p>{props.date}</p>
        </div>
    </MainDisplay>
  );
};

export default Resumen;