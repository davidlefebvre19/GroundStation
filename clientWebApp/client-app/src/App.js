import React, { Component } from 'react';
//import io from 'socket.io-client';
import {Navbar,NavItem,Col,Row} from "react-materialize"
import logo from './logo.svg';
import './App.css';
import BNOA from './Components/BNOA'
import SPEEDPITOT from './Components/SPEEDPITOT'

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
      </div>
    );
  }
}

export default App;
