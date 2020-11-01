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
    RFState: '',
    alarmState: '',
    updatedDate: ''
  }

  setEventTime = () => {
    const dateListen = firebase.database().refFromURL(`${BASE_URL}/Conexion_Reciente/Reciente`);
    dateListen.on('value', (snapshot) => {
      this.setState({updatedDate: snapshot.val()});
    })
  }

  setAlarmState = () => {
    const alarmListen = firebase.database().refFromURL(`${BASE_URL}/Estado_Local/Estado`);
    alarmListen.on('value', (snapshot) => {
      this.setState({alarmState: snapshot.val()});
    });
  }

  setRFCommonState = (lecture) => {
    const RFStateListen = firebase.database().refFromURL(`${BASE_URL}/COM_RF/RFDSecundario`);
    RFStateListen.on('value', (snapshot) => {
      this.setState({RFState: snapshot.val()});
    });
  }

  componentDidMount = () => {
    this.setEventTime();
    this.setAlarmState();
    this.setRFCommonState();
  }

  failureState = () => {
    const activeNodesListen = firebase.database().refFromURL(`${BASE_URL}/Estado_Local/Estado`);
    activeNodesListen.on('value', (snapshot) => {
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
              date={this.state.updatedDate}
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