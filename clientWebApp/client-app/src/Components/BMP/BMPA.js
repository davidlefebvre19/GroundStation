import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

class BMPA extends Component {
    render() {
        return (
          <div className="component">
              <Card className ='grey lighten-3' textClassName='grey-text' title='Altitude'>
              <Line data={this.state.data}/>
              <p className="center">{this.state.alt}</p>
              </Card>
          </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
          alt: 0,
          altPoints: Array(1).fill(null),
          data: []
        }
      }
    
    componentDidMount(){
        this.setState({data: getData([])})
    }

    componentWillMount(){
        var that = this
        this.props.socket.on('BMP', ({alt})=>{
          that.setState({
            alt: alt,
            altPoints: [...that.state.altPoints.slice(-10),alt], //that.state.Xpoint.push(x)
            data:getData(that.state.altPoints)
          });
        });
    
    }

}

export default BMPA;


const getData =(altPoints)=>({
    labels: Array(altPoints.length).fill(""),
    datasets: [
      {
        label: 'altitude',
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
        data: altPoints
        }
    ]
})