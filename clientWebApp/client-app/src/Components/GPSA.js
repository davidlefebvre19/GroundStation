import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Col,Row,Card} from "react-materialize"

class GPSA extends Component {
    render() {
        return (
          <div className="component">
              <Card className ='grey lighten-3' textClassName='grey-text' title='speeditude GPS'>
              <Line data={this.state.data}/>
              <p className="center">{this.state.speed}</p>
              </Card>
          </div>
        );
    }

    constructor(props){
        super(props);
        this.connectOnSocket = this.connectOnSocket.bind(this)
        this.state = {
          speed: 0,
          speedPoints: Array(1).fill(null),
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
        txt = "LORABMP"
      }else{
        txt = "BMP"
      }
      this.props.socket.on(txt, ({speed})=>{
        that.setState({
            speed: speed,
            speedPoints: [...that.state.speedPoints.slice(-10),speed], //that.state.Xpoint.push(x)
            data:getData(that.state.speedPoints)
        });
      });
    }

    componentWillMount(){
      this.connectOnSocket() 
    }

}

export default GPSA;


const getData =(speedPoints)=>({
    labels: Array(speedPoints.length).fill(""),
    datasets: [
      {
        label: 'speeditude GPS',
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
        data: speedPoints
        }
    ]
})