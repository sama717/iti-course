import { Nav } from './components/Nav.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { Component } from 'react'
import Home from './components/Home.jsx';
import Cards from './components/Cards.jsx';

function App() {
  return (
    <React.Fragment>
      <Nav/>
      <Home/>
      <Cards/>
    </React.Fragment>
  );
}

export default App;
