import React from 'react';
import styles from './NodosSistema.module.css';
import MainDisplay from '../MainDisplay/MainDisplay';

const NodosSistema = (props) => {
  return (
    <MainDisplay title='Nodos del sistema'>
      <div className={styles.NodosSistema}>
        <p>Nodos Activos: &nbsp; <strong style={{fontSize: '24px'}}>{props.nodeNumber}</strong></p>
      </div>
    </MainDisplay>
  );
};

export default NodosSistema;