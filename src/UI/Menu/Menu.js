import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  const showClass = props.toggleClass ? 'show' : '';
  const classes = [styles.Menu, styles[showClass]];
  console.log(classes);

  return (
  <div className={classes.join(' ')}>
    <ul>
      <li><NavLink to="/">Nodos</NavLink></li>
      <li><NavLink to="/indicadores">Indicadores</NavLink></li>
      <li><NavLink to="/resumen">Resumen</NavLink></li>
    </ul>
  </div>
);
}
export default Menu;