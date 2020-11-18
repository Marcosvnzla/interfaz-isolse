import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

const menuItem = (props) => {
  return (
    <NavLink to={props.to} exact onClick={props.clicked} className={styles.MenuItem} activeClassName={styles.active}>{props.children}</NavLink>
  );
}

export default menuItem;