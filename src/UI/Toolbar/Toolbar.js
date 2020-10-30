import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Toolbar.module.css';
import smallLogo from '../../assets/images/smallLogo.png';

const Toolbar = () => (
  <div className={styles.Toolbar}>
    <div className={styles.imgContainer}><img src={smallLogo} alt="logo" /></div>
    <nav>
      <ul>
        <li><Link to="/">Nodos</Link></li>
        <li><Link to="/indicadores">Indicadores</Link></li>
        <li><Link to="/resumen">Resumen</Link></li>
      </ul>
    </nav>
  </div>
);

export default Toolbar;