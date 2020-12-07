import React from 'react';
import styles from './Indicadores.module.css';
import MainDisplay from '../MainDisplay/MainDisplay';
import wifi_img from '../../assets/images/wifi_img.svg';
import central_img from '../../assets/images/central_img.svg';

const Indicadores = (props) => {

  let sdaTextMessage = '';
  switch (props.alarmIndicador) {
    case 'normal':
      sdaTextMessage = 'normal';
      break;
    case 'failure':
      sdaTextMessage = 'de falla';
      break;
    case 'critical':
      sdaTextMessage = 'crítico!';
      break;
    default:
      sdaTextMessage = 'no se pudo obtener información del estado';
      break;
  }

  let rfTextMessage = '';
  switch (props.RFIndicador) {
    case 'normal':
      rfTextMessage = 'normal';
      break;
    case 'failure':
      rfTextMessage = 'de falla';
      break;
    case 'critical':
      rfTextMessage = 'crítico!';
      break;
    default:
      rfTextMessage = 'no se pudo obtener información del estado';
      break;
  }

  return (
    <MainDisplay title='Indicadores'>
      <div className={styles.ContainerGraficas}>
        <div className={styles.Grafica}>
          <h2>SDAI</h2>
          <div className={styles[props.alarmIndicador]}>
            <img src={central_img} alt="central icon" />
          </div>
          <p>Componente en estado <strong>{sdaTextMessage}</strong></p>
        </div>
        <div className={styles.Grafica}>
          <h2>RF Comm</h2>
          <div className={styles[props.RFIndicador]}>
            <img src={wifi_img} alt="wifi moden icon" style={{padding: '16px'}} />
          </div>
          <p>Componente en estado <strong>{rfTextMessage}</strong> </p>
        </div>
      </div>
      <button onClick={props.btnClicked}>Obtener dirección</button>
    </MainDisplay>

  );
};

export default Indicadores;