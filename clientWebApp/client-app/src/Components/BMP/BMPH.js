import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

class BMPH extends Component {
    render() {
        return (
          <div className="component">
              <Card className ='grey lighten-3' textClassName='grey-text' title='Humidity'>
              <Line data={this.state.data}/>
              <p className="center">{this.state.hum}</p>
              </Card>
          </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
          hum: 0,
          humPoints: Array(1).fill(null),
          data: []
        }
      }
    
    componentDidMount(){
        this.setState({data: getData([])})
    }

    componentWillMount(){
        var that = this
        this.props.socket.on('BMP', ({hum})=>{
          that.setState({
            hum: hum,
            humPoints: [...that.state.humPoints.slice(-10),hum], //that.state.Xpoint.push(x)
            data:getData(that.state.humPoints)
          });
        });
    
    }

}

export default BMPH;


const getData =(humPoints)=>({
    labels: Array(humPoints.length).fill(""),
    datasets: [
      {
        label: 'Humidity',
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
        data: humPoints
        }
    ]
})