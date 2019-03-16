import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class BNOA extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
      XPoints: Array(1).fill(null),
      YPoints: Array(1).fill(null),
      ZPoints: Array(1).fill(null),
      data: []
    }
  }
  componentDidMount(){
    this.setState({data: getData([])})

  }
  componentWillMount(){
    var that = this
    this.props.socket.on('ORI', ({x,y,z})=>{
      that.setState({
        x: x,y: y,z: z,
        XPoints: [...that.state.XPoints,x], //that.state.Xpoint.push(x)
        YPoints: [...that.state.YPoints,y],
        ZPoints: [...that.state.ZPoints,z],
        data:getData(that.state.XPoints,that.state.YPoints)
      });
    });

  }
  render() {
    return (
      <div className="component">
        <p>BNOA</p>
        <ul>
          <li>x: {this.state.x}</li>
          <li>y: {this.state.y}</li>
          <li>z: {this.state.z}</li>
        </ul>
        <Line data={this.state.data}/>

      </div>
    );
  }
}

const getData =(XPoints,YPoints,ZPoints)=>({
  // while( HPoints.length > BPoints.length ) { HPoints = HPoints.slice(1) }
  // while( BPoints.length > HPoints.length ) { BPoints = BPoints.slice(1) }
  labels: Array(XPoints.length).fill(""),
  datasets: [
    {
      label: 'ORI x',
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
      data: XPoints
    },
    {
      label: 'ORI y',
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
      data: YPoints
    },
    {
      label: 'ORI z',
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
      data: YPoints
    }
  ]
});

export default BNOA;
