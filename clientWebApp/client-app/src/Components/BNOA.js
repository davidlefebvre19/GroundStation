import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

const getData =(HPoints, BPoints)=>({
  // while( HPoints.length > BPoints.length ) { HPoints = HPoints.slice(1) }
  // while( BPoints.length > HPoints.length ) { BPoints = BPoints.slice(1) }

  labels: Array(HPoints.length).fill(""),
  datasets: [
    {
      label: 'ORI',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: HPoints
    }
  ]
});
class BNOA extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
      HPoints: Array(1).fill(null),
      XPoints: Array(1).fill(null),
      data: []
    }
  }
  componentDidMount(){
    this.setState({data: getData([])})

  }
  componentWillMount(){
    var that = this
    this.props.socket.on('BNOA', ({x,y,z})=>{
      that.setState({
        x: x,y: y,z: z,
        XPoints: [...that.state.XPoints.slice(-10),x],
        data:getData(that.state.XPoints, that.state.HPoints)
      });
    });

  }
  render() {
    return (
      <div className="component">
          <Card className ='grey lighten-3' textClassName='grey-text' title='ORI A'>
          <Line data={this.state.data}/>
          <p className="center">{this.state.x}, {this.state.y},{this.state.z}</p>
          </Card>

      </div>
    );
  }
}

export default BNOA;
