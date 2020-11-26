import React from 'react';
import styles from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = (props) => {
  return (
  <div className={styles.Menu}>
    <ul>
      <li><MenuItem to="/" clicked={props.clickedLink}>Nodos</MenuItem></li>
      <li><MenuItem to="/indicadores" clicked={props.clickedLink}>Indicadores</MenuItem></li>
      <li><MenuItem to="/resumen" clicked={props.clickedLink}>Resumen</MenuItem></li>
      <li><MenuItem to="/about" clicked={props.clickedLink}>Nosotros</MenuItem></li>
    </ul>
  </div>
);
}
export default Menu;