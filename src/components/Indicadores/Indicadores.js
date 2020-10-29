import React from 'react';
import styles from './Indicadores.module.css';

const Indicadores = (props) => {
  return (
    <div className={styles.Indicadores}>
      <h1>Indicadores</h1>
      <div className={styles.ContainerGraficas}>
        <div className={styles.Grafica}>
          <h2>Indicator 1</h2>
          <div></div>
          <p>Legend 1</p>
        </div>
        <div className={styles.Grafica}>
          <h2>Indicator 2</h2>
          <div></div>
          <p>Legend 2</p>
        </div>
      </div>
    </div>

  );
};

export default Indicadores;