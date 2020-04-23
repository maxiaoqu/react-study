import React, { Component } from 'react';
import DemoIndex1 from './day01-code/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
            <h4>第一部分</h4>
            <DemoIndex1></DemoIndex1>
        </div>
      </div>
    );
  }
}

export default App;
