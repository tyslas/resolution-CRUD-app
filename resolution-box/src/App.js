import React, { Component } from 'react';
import styles from './App.css';

import Navbar from './Components/UI/Navbar/Navbar'
import Main from './Components/UI/Main/Main'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
