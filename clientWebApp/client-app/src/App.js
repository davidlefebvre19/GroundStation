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
    lora: false,
    randmo: 0
    }
  }
  componentDidMount(){
    
  }
  onSwitch(e){
    let random = Math.floor(Math.random()*(0-999999));
    this.setState({
      lora: !this.state.lora,
      random: random
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
      <p>Capting on {this.state.lora ? "Lora antenna" : "xbee antenna"}</p>
        <Col s={12} m={6}>
          <PITOT socket={socket} key={this.state.random} />
        </Col>
        <Col s={12} m={6}>
          <GPS2 socket={socket} key={this.state.random +1} />
        </Col>
        <Col s={12} m={6}>
          <BNOA socket={socket} key={this.state.random +2} lora={this.state.lora}/>
        </Col>
        <Col s={12} m={6}>
          <BMPT socket={socket} key={this.state.random +3} />
        </Col>
        <Col s={12} m={6}>
          <BMPP socket={socket} key={this.state.random +4} />
        </Col>
        <Col s={12} m={6}>
          <BMPA socket={socket} key={this.state.random +5} />
        </Col>
        <Col s={12} m={6}>
          <GPSA socket={socket} key={this.state.random +6} />
        </Col>
        <Col s={12} m={6}>
          <BMPH socket={socket} key={this.state.random +7} />
        </Col>
        <Col s={12} m={6}>
          <BMPG socket={socket} key={this.state.random +8} />
        </Col>
        <Col s={12} m={6}>
          <FSR socket={socket} key={this.state.random +9} />
        </Col>
        <Col s={12} m={6}>
          <GPS socket={socket} key={this.state.random +10} />
        </Col>
      </Row>
      </div>
    );
  }
}

