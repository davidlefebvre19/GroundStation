import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

class BMPP extends Component {
    render() {
        return (
          <div className="component">
              <Card className ='grey lighten-3' textClassName='grey-text' title='Pression'>
              <Line data={this.state.data}/>
              <p className="center">{this.state.pres}</p>
              </Card>
          </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
          pres: 0,
          presPoints: Array(1).fill(null),
          data: []
        }
      }
    
    componentDidMount(){
        this.setState({data: getData([])})
    }

    componentWillMount(){
        var that = this
        this.props.socket.on('BMP', ({pres})=>{
          that.setState({
            pres: pres,
            presPoints: [...that.state.presPoints.slice(-10),pres], //that.state.Xpoint.push(x)
            data:getData(that.state.presPoints)
          });
        });
    
    }

}

export default BMPP;


const getData =(presPoints)=>({
    labels: Array(presPoints.length).fill(""),
    datasets: [
      {
        label: 'Pressure',
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
        data: presPoints
        }
    ]
})