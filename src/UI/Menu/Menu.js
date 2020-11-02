import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  const showClass = props.toggleClass ? 'show' : '';
  const classes = [styles.Menu, styles[showClass]];

  return (
  <div className={classes.join(' ')}>
    <ul>
      <li><NavLink to="/" onClick={props.clickedLink}>Nodos</NavLink></li>
      <li><NavLink to="/indicadores" onClick={props.clickedLink}>Indicadores</NavLink></li>
      <li><NavLink to="/resumen" onClick={props.clickedLink}>Resumen</NavLink></li>
    </ul>
  </div>
);
}
export default Menu;