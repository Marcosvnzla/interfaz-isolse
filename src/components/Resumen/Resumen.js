import React from 'react';

const Resumen = (props) => {
  return (
    <div>
      <h1>Resumen</h1>
      <div>
        <h2>Comm RF</h2>
        <p>{props.rfState}</p>
      </div>
      <div>
        <h2>Estado de alarma</h2>
        <p>{props.alarmState}</p>
      </div>
      <div>
        <h2>Fecha de ultimo evento</h2>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default Resumen;