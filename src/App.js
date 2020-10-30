import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import NodosSistema from './components/NodosSistema/NodosSistema';
import Resumen from './components/Resumen/Resumen';
import Indicadores from './components/Indicadores/Indicadores';

class App extends Component {
  state = {
    RFState: 'normal',
    alarmState: 'normal',
    lastLectureDate: 'no date yet'
  }

  getEventTime = () => {
    const timeStamp = new Date();
    const date = timeStamp.toDateString();
    this.setState({lastLectureDate: date});
  }

  setAlarmState = (lecture) => {
    this.setState({alarmState: lecture});
    this.getEventTime();
  }

  setRFCommonState = (lecture) => {
    this.setState({RFState: lecture});
    this.getEventTime();
  }

  normalState = () => {
    this.setAlarmState('normal');
  }

  failureState = () => {
    this.setAlarmState('failure');
  }
  
  criticalState = () => {
    this.setAlarmState('critical');
  }

  render () {
    return (
      <Layout>
        <NodosSistema />
        <Indicadores sdaState={this.state.alarmState} rfCommState={this.state.RFState} /> 
        <Resumen 
          date={this.state.lastLectureDate}
          alarmState={this.state.alarmState}
          rfState={this.state.RFState}/> 
        <button onClick={this.normalState}>toggle normal</button>
        <button onClick={this.failureState}>toggle failure</button>
        <button onClick={this.criticalState}>toggle critical</button>
      </Layout>
    );
  }
}

export default App;