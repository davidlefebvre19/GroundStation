
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from 'socket.io-client'

export default class Gpsmap extends Component {
   constructor(props) {
     super(props);

     this.state = {
       coordMinX: 4.278642,
       coordMaxX: 4.478642,
       coordMinY: 50.923725,
       coordMaxY: 50.723725,
       coordX: 0.000,
       coordY: 0.000,
       imgX:292,
       imgY: 464,
       perCoordX: 0,
       perCoordY: 0,
       ctx: undefined
     }
   }
   componentWillMount(){
     const socket = this.props.socket

     var that = this
      socket.on('GPS1', ({Lat,Lon}) => {
       that.setState({coordX: Lat,coordY: Lon,
        perCoordX: (that.state.imgX / Math.abs(that.state.coordMinX- that.state.coordMaxX)),
        perCoordY: (that.state.imgY / Math.abs(that.state.coordMaxY- that.state.coordMinY)),
        })
       that.changePosition(Lat,Lon)
      })
   }
   changePosition(Lat,Lon){
    var ctx = this.state.ctx;
    ctx.clearRect(0,0,this.state.imgX,this.state.imgY);
    var img = new Image();
    var imgX= this.state.imgX
    var imgY= this.state.imgY
    var coordMaxX= this.state.coordMaxX
    var coordMinX= this.state.coordMinX
    var coordMaxY= this.state.coordMaxY
    var coordMinY= this.state.coordMinY
    var perCoordX = this.state.perCoordX
    var perCoordY = this.state.perCoordY
    // console.log("attention")
    // console.log(y)
    // console.log(coordMinX)
    // console.log(perCoordX)
    // console.log("add "+ Math.abs(y - coordMinX))
    var coordX = perCoordX * (Math.abs(Lat - coordMinX))
    var coordY = perCoordY * Math.abs(Lon - coordMinY)
    // console.log("coord X: "+coordX)
    // console.log("coord Y:" +coordY)
    var that = this
    img.onload = function() {
      ctx.drawImage(img,0,0, imgX, imgY);
      ctx.fillRect(coordX, coordY, 20, 20);
      ctx.fill();
      ctx.line
    // ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    //ctx.strokeRect(50, 50, 50, 50);
    };
    img.src = '/carte.png';

   }
    componentDidMount() {
        this.updateCanvas();
    }
    launchinterval(){

      // var ctx        = this.state.ctx
      // ctx.clearRect(0,0,this.state.imgX,this.state.imgY);

    }
    updateCanvas() {
        let ctx = this.refs.canvas.getContext('2d');
        var imgX= this.state.imgX
        var imgY= this.state.imgY
        var that = this
        this.setState({ctx: ctx},function(){
          var img = new Image();
          img.onload = function() {
            that.state.ctx.drawImage(img,0,0, imgX, imgY);
                // ctx.fillRect(25, 25, 100, 100);
                //ctx.clearRect(45, 45, 60, 60);
                //ctx.strokeRect(50, 50, 50, 50);
          };
          img.src = '/carte.png';
          this.state.ctx.fillRect(0,0, 100, 100);
        });
    }
    render() {
        return (
            <canvas ref="canvas" width={this.state.imgX} height={this.state.imgY}/>
        );
    }
}