import React from 'react';
import styles from './NodosSistema.module.css';
import MainDisplay from '../MainDisplay/MainDisplay';
const VALOR_DISP_SECUNDARIO_1 = "someString";
const VALOR_DISP_SECUNDARIO_2 = "someString2";

const NodosSistema = () => {
  return (
    <MainDisplay title='Nodos del sistema'>
      <div className={styles.NodosSistema}>
        <select>
          <option>Sin dispositivos conectados</option>
          <option value={VALOR_DISP_SECUNDARIO_1}>1 dispositivo secundario</option>
          <option value={VALOR_DISP_SECUNDARIO_2}>2 dispositivos secundarios</option>
        </select>
      </div>
    </MainDisplay>
  );
};

export default NodosSistema;