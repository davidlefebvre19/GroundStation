import React, { Component } from 'react';
import {Card} from "react-materialize"
import ReactSpeedometer from "react-d3-speedometer"

class GPS2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      speed: 0
    }
  }
  componentDidMount(){

  }
  componentWillMount(){
    var that = this
    this.props.socket.on('GPS2', ({x})=>{
      that.setState({
        speed: (x*1.852)
      });
    });

  }
  render() {
    return (
      <div className="component">
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