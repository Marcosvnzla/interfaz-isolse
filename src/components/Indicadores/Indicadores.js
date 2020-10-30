import React from 'react';
import styles from './Indicadores.module.css';

const Indicadores = (props) => {
  let sdaTextMessage = '';

  switch (props.sdaState) {
    case 'normal':
      sdaTextMessage = 'normal';
      break;
    case 'failure':
      sdaTextMessage = 'de falla';
      break;
    case 'critical':
      sdaTextMessage = 'critico!';
      break;
    default:
      sdaTextMessage = 'no se pudo obtener informacion del estado';
      break;
  }

  let rfTextMessage = '';
  switch (props.rfCommState) {
    case 'normal':
      rfTextMessage = 'normal';
      break;
    case 'failure':
      rfTextMessage = 'de falla';
      break;
    case 'critical':
      rfTextMessage = 'critico!';
      break;
    default:
      rfTextMessage = 'no se pudo obtener informacion del estado';
      break;
  }



  return (
    <div className={styles.Indicadores}>
      <h1>Indicadores</h1>
      <div className={styles.ContainerGraficas}>
        <div className={styles.Grafica}>
          <h2>SDA!</h2>
          <div className={styles[props.sdaState]}></div>
          <p>Componente en estado <strong>{sdaTextMessage}</strong></p>
        </div>
        <div className={styles.Grafica}>
          <h2>RF Common</h2>
          <div className={styles[props.rfCommState]}></div>
          <p>Componente en estado <strong>{rfTextMessage}</strong> </p>
        </div>
      </div>
    </div>

  );
};

export default Indicadores;