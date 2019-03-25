import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

class BMPT extends Component {
    render() {
        return (
          <div className="component">
              <Card className ='grey lighten-3' textClassName='grey-text' title='Temperature'>
              <Line data={this.state.data}/>
              <p className="center">{this.state.temp}</p>
              </Card>
          </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
          temp: 0,
          tempPoints: Array(1).fill(null),
          data: []
        }
      }
    
    componentDidMount(){
        this.setState({data: getData([])})
    }

    componentWillMount(){
        var that = this
        this.props.socket.on('BMP', ({temp})=>{
          that.setState({
            temp: temp,
            tempPoints: [...that.state.tempPoints.slice(-10),temp], //that.state.Xpoint.push(x)
            data:getData(that.state.tempPoints)
          });
        });
    
    }

}

export default BMPT;


const getData =(tempPoints)=>({
    labels: Array(tempPoints.length).fill(""),
    datasets: [
      {
        label: 'temperature',
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
        data: tempPoints
        }
    ]
})