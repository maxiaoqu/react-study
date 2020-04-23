import React, {Component} from 'react';
import Day01Code from './day01-code/index';
import Day02Code from './day02-code/index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <h4>第一部分：核心概念</h4>
                    <Day01Code></Day01Code>
                </div>
                <div className="App-intro">
                    <h4>第二部分：Ant Design UI的使用</h4>
                    <Day02Code></Day02Code>
                </div>
            </div>
        );
    }
}

export default App;
