import React, { Component } from 'react';
import {Card} from "react-materialize"
import ReactSpeedometer from "react-d3-speedometer"

class GPS2 extends Component {
  constructor(props){
    super(props);
    this.connectOnSocket = this.connectOnSocket.bind(this)
    this.state = {
      speed: 0,
      lora: props.lora
    }
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    this.setState({ lora: nextProps.lora });
  }

  componentDidMount(){
    this.setState({data: getData([])})
    this.connectOnSocket()
  }

  connectOnSocket(){
    var that = this
    var txt = ""
    if(this.state.lora){
      txt = "LORABMP"
    }else{
      txt = "BMP"
    }
    this.props.socket.on(txt, ({x})=>{
      that.setState({
          x: x,
          xPoints: [...that.state.xPoints.slice(-10),x], //that.state.Xpoint.push(x)
          data:getData(that.state.xPoints)
      });
    });
  }

  componentWillMount(){
    this.connectOnSocket() 
  }

  render() {
    return (
      <div className="component">
          <p>Capting on {this.state.lora ? "Lora antenna" : "xbee antenna"}</p>
          <Card className ='grey lighten-3' textClassName='grey-text' title='SPEED GPS'>
            <ReactSpeedometer
              maxValue={80}
              value={this.state.speed}
              needleColor="steelblue"
              startColor="green"
              segments={20}
              endColor="red"

  />
            <p className="center">{this.state.speed} km/h</p>
          </Card>

      </div>
    );
  }
}

export default GPS2;