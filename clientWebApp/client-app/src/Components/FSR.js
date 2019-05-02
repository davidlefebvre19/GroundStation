import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

class FSR extends Component {
    render() {
        return (
          <div className="component">
              <Card className ='grey lighten-3' textClassName='grey-text' title='Impact Detector'>
              <Line data={this.state.data}/>
              <p className="center">{this.state.FSR}</p>
              </Card>
          </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
          FSR: 0,
          FSRPoints: Array(1).fill(null),
          data: [],
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
        txt = "LORAFSR"
      }else{
        txt = "FSR"
      }
      this.props.socket.on(txt, ({FSR})=>{
        that.setState({
            FSR: FSR,
            FSRPoints: [...that.state.FSRPoints.slice(-10),FSR], //that.state.Xpoint.push(x)
            data:getData(that.state.FSRPoints)
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
            <Card className ='grey lighten-3' textClassName='grey-text' title='Humidity'>
            <Line data={this.state.data}/>
            <p className="center">{this.state.x}, {this.state.y},{this.state.z}</p>
            </Card>
  
        </div>
      );
    }

}

export default FSR;


const getData =(FSRPoints)=>({
    labels: Array(FSRPoints.length).fill(""),
    datasets: [
      {
        label: 'FSR',
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
        data: FSRPoints
        }
    ]
})