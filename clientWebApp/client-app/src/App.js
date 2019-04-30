import React, { Component } from 'react';
//import io from 'socket.io-client';
import {Navbar,NavItem,Col,Row,Switch} from "react-materialize"
import logo from './logo.svg';
import './App.css';
import BNOA from './Components/BNOA'
import PITOT from './Components/PITOT'
import BMPT from './Components/BMP/BMPT'
import BMPA from './Components/BMP/BMPA'
import BMPP from './Components/BMP/BMPP'
import BMPG from './Components/BMP/BMPG'
import BMPH from './Components/BMP/BMPH'
import GPS from './Components/GPS'
import FSR from './Components/FSR'
import GPS2 from './Components/GPS2'
import GPSA from './Components/GPSA'


var io = require('socket.io-client');
const socket = io.connect('http://localhost:3000', {reconnect: true});

export default class App extends Component {
  constructor(props){
    super(props);
    this.onSwitch = this.onSwitch.bind(this)
    this.state = {
      lora: false
    }
  }
  componentDidMount(){
    
  }
  onSwitch(e){
    this.setState({
      lora: !this.state.lora
    })
  }
  render() {
    return (
      <div>
      <Navbar className="teal accent-3" brand='Velocity' right>
      </Navbar>
      <div className="switch">
    <label>
      Off
      <input value={this.state.lora} onChange={this.onSwitch} type="checkbox"/>
      <span className="lever"></span>
      On
    </label>
  </div>

      <Row>
        <Col s={12} m={6}>
          <PITOT socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <GPS2 socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <BNOA socket={socket} lora={this.state.lora}/>
        </Col>
        <Col s={12} m={6}>
          <BMPT socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <BMPP socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <BMPA socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <GPSA socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <BMPH socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <BMPG socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <FSR socket={socket}/>
        </Col>
        <Col s={12} m={6}>
          <GPS socket={socket}/>
        </Col>
      </Row>
      </div>
    );
  }
}

