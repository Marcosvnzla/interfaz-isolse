import React from 'react';
import styles from './About.module.css';
import MainDisplay from '../MainDisplay/MainDisplay';
import heart_icon from '../../assets/images/heart_icon.svg';
import bigLogo_img from '../../assets/images/bigLogo_img.png';

const About = () => {
  return (
    <MainDisplay title='Acerca de nosotros'>
      <div className={styles.infoContainer}>
        <a href="http://isolse.com.ar/" target="_blank" rel="noreferrer">
          <img src={bigLogo_img} alt="big logo icon" />
        </a>
        <a href="mailto:contacto@isolse.com.ar">contacto@isolse.com.ar</a>
      </div>
      <div className={styles.infoContainer}>
        <p>IMSDI v_1.0<br/>Interfaz de monitoreo para sistemas de detección de incendio</p>
      </div>
      <div className={styles.profileInfo}>
        <p>creado con <img src={heart_icon} alt="heart icon" /> por <a href="https://github.com/Marcosvnzla/" target="_blank" rel="noreferrer">Marcosvnzla</a></p>
      </div>
    </MainDisplay>
  );
}

export default About;