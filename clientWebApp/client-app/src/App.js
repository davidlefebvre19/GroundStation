import React, { Component } from 'react';
//import io from 'socket.io-client';
import {Navbar,NavItem,Col,Row} from "react-materialize"
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import ORI from './Components/ORI'
=======
import BNOA from './Components/BNOA'
import SPEEDPITOT from './Components/SPEEDPITOT'
>>>>>>> fc473befaa4b080e15da05f2aaa3787fd527f1a1

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
<<<<<<< HEAD
      <div className="App">
        <header className="App-header">
        <h1>Cansat</h1>
        </header>
        <ORI socket={socket}/>
=======
      <div>
      <Navbar className="teal accent-3" brand='Velocity' right>
      </Navbar>
      <Row>
        <Col s={12} m={6}>
          <BNOA socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <SPEEDPITOT socket={socket}/>
        </Col>
      </Row>
>>>>>>> fc473befaa4b080e15da05f2aaa3787fd527f1a1
      </div>
    );
  }
}

export default App;
