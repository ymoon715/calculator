import React, { Component } from 'react';
import Buttons from './components/Buttons'
import './App.css';
import Display from './components/Display'
import Input from './components/Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Input />
        <Buttons />
      </div>
    );
  }
}

export default App;
