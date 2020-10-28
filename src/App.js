import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import NodosSistema from './components/NodosSistema/NodosSistema';
import Resumen from './components/Resumen/Resumen';
import Indicadores from './components/Indicadores/Indicadores';

class App extends Component {
  render () {
    return (
      <Layout>
        <NodosSistema />
        <Resumen /> 
        <Indicadores /> 
      </Layout>
    );
  }
}

export default App;
