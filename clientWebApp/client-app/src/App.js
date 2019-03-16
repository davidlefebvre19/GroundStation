import React, { Component } from 'react';
//import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
import ORI from './Components/ORI'

var io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', {reconnect: true});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Cansat</h1>
        </header>
        <ORI socket={socket}/>
      </div>
    );
  }
}

export default App;
