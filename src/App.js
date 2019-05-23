import React, {Component} from 'react';

import './App.css';
//import DataParser from "./components/DataParser"
import {connect} from 'react-redux';
import Image from 'react-graceful-image'
import AppRouter from './routers/AppRouter';



class App extends Component {

  render() {
    return (
      <div>
        <AppRouter></AppRouter>
      </div>
    );
  }
}

export default App;