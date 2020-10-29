import React from 'react';
import styles from './NodosSistema.module.css';
const VALOR_DISP_SECUNDARIO_1 = "someString";
const VALOR_DISP_SECUNDARIO_2 = "someString2";

const NodosSistema = () => {
  return (
    <div className={styles.NodosSistema}>
      <h1>Nodos del sistema</h1>
      <select>
        <option>Sin dispositivos conectados</option>
        <option value={VALOR_DISP_SECUNDARIO_1}>1 dispositivo secundario</option>
        <option value={VALOR_DISP_SECUNDARIO_2}>2 dispositivos secundarios</option>
      </select>
    </div>
  );
};

export default NodosSistema;