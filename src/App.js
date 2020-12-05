import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import firebase from './Firebase';
import Layout from './components/Layout/Layout';
import NodosSistema from './components/NodosSistema/NodosSistema';
import Resumen from './components/Resumen/Resumen';
import Indicadores from './components/Indicadores/Indicadores';
import About from './components/About/About';

const BASE_URL = 'https://maestria1-24022020.firebaseio.com/SISTEMA DE DETECCION INCENDIO DAMF';

class App extends Component {
  state = {
    RFState: '',
    alarmState: '',
    updatedDate: '',
    alarmIndicador: '',
    RFIndicador: '',
    activeNodes: null
  }

  getLocation = () => {
    axios.get(`${BASE_URL}/Direccion.json`)
    .then((response) => {
      const encodedQuery = encodeURI(response.data);
      window.open(`https://www.google.com.ar/maps/search/?api=1&query=${encodedQuery}`);
    })
    .catch(e => {
      console.log(e);
    })
  }

  setEventTime = () => {
    const dateNode = firebase.database().refFromURL(`${BASE_URL}/Conexion_Reciente/Reciente`);
    dateNode.on('value', (snapshot) => {
      this.setState({updatedDate: snapshot.val()});
    })
  }

  setAlarmState = () => {
    const alarmNode = firebase.database().refFromURL(`${BASE_URL}/Estado_Local/Estado`);
    alarmNode.on('value', (snapshot) => {
      this.setState({alarmState: snapshot.val()});
    });

    const alarmIndicadorNode = firebase.database().refFromURL(`${BASE_URL}/Estado_Local/indicador`);
    alarmIndicadorNode.on('value', (snapshot) => {
      this.setState({alarmIndicador: snapshot.val()});
    });
  }

  setRFCommonState = () => {
    const RFNode = firebase.database().refFromURL(`${BASE_URL}/COM_RF/RFDSecundario`);
    RFNode.on('value', (snapshot) => {
      this.setState({RFState: snapshot.val()});
    });

    const RFIndicadorNode = firebase.database().refFromURL(`${BASE_URL}/COM_RF/indicador`);
    RFIndicadorNode.on('value', (snapshot) => {
      this.setState({RFIndicador: snapshot.val()});
    });
  }

  setNodeState = () => {
    const activeNode = firebase.database().refFromURL(`${BASE_URL}/ACTIVE_NODES/number`);
    activeNode.on('value', (snapshot) => {
      this.setState({activeNodes: snapshot.val()});
    });
  }

  componentDidMount() {
    this.setEventTime();
    this.setAlarmState();
    this.setRFCommonState();
    this.setNodeState();
  }

  render () {
    return (
      <BrowserRouter>
        <Layout showMenuState={this.state.menuState}>
          <Route path="/" exact>
            <NodosSistema nodeNumber={this.state.activeNodes} />
          </Route>
          <Route path="/indicadores" >
            <Indicadores btnClicked={this.getLocation} alarmIndicador={this.state.alarmIndicador} RFIndicador={this.state.RFIndicador} /> 
          </Route>
          <Route path="/resumen">
            <Resumen 
              date={this.state.updatedDate}
              alarmState={this.state.alarmState}
              rfState={this.state.RFState}/> 
          </Route>
          <Route path="/about" component={About} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;