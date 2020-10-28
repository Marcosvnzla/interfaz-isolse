import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import NodosSistema from './components/NodosSistema/NodosSistema';
import Resumen from './components/Resumen/Resumen';
import Indicadores from './components/Indicadores/Indicadores';

class App extends Component {
  state = {
    RFState: 'todo ok',
    alarmState: 'todo bien',
    lastLectureDate: null
  }

  eventMonitor = () => {
    const timeStamp = new Date();
    const date = timeStamp.toDateString();
    console.log(date);
    this.setState({
      RFState: 'todo mal',
      alarmState: 'se funde',
      lastLectureDate: date
    });
  } 

  render () {
    return (
      <Layout>
        <NodosSistema />
        <Resumen 
          date={this.state.lastLectureDate}
          alarmState={this.state.alarmState}
          rfState={this.state.RFState}/> 
        <Indicadores /> 
        <button onClick={this.eventMonitor}>toggle state</button>
      </Layout>
    );
  }
}

export default App;