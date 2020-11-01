import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from './Firebase';
import Layout from './components/Layout/Layout';
import NodosSistema from './components/NodosSistema/NodosSistema';
import Resumen from './components/Resumen/Resumen';
import Indicadores from './components/Indicadores/Indicadores';

const BASE_URL = 'https://maestria1-24022020.firebaseio.com/SISTEMA DE DETECCION INCENDIO DAMF';

class App extends Component {
  state = {
    RFState: 'normal',
    alarmState: 'normal',
    lastLectureDate: 'placeholder'
  }

  getEventTime = () => {
    axios.get(`${BASE_URL}/Conexion_Reciente/Reciente.json`)
    .then((date) => {
      this.setState({lastLectureDate: date.data})
    });
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
    const activeNodesLecture = firebase.database().refFromURL(`${BASE_URL}/Estado_Local/Estado`);
    activeNodesLecture.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
    axios.get(`${BASE_URL}/Direccion.json`)
    .then((response) => {
      console.log(response.data);
      const encodedQuery = encodeURI(response.data);
      window.open(`https://www.google.com.ar/maps/search/?api=1&query=${encodedQuery}`);
    });
    this.setAlarmState('failure');
  }
  
  criticalState = () => {
    this.setAlarmState('critical');
  }

  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={NodosSistema} />
          <Route path="/indicadores" >
            <Indicadores sdaState={this.state.alarmState} rfCommState={this.state.RFState} /> 
          </Route>
          <Route path="/resumen">
            <Resumen 
              date={this.state.lastLectureDate}
              alarmState={this.state.alarmState}
              rfState={this.state.RFState}/> 
          </Route>
          <button onClick={this.normalState}>toggle normal</button>
          <button onClick={this.failureState}>toggle failure</button>
          <button onClick={this.criticalState}>toggle critical</button>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;