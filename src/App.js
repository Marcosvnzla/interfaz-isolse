import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import NodosSistema from './components/NodosSistema/NodosSistema';

class App extends Component {
  render () {
    return (
      <Layout>
        <NodosSistema />
        <h1>Resumen (component)</h1>
        <h1>Indicadores (component)</h1>
      </Layout>
    );
  }
}

export default App;
