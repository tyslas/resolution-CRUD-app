import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/less/bootstrap.less'
import logo from './logo.svg';
import './App.css';


import Navbar from './Navigation/Navbar';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header> */}
      </div>
    );
  }
}

export default App;
