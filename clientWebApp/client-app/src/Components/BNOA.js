import React, { Component } from 'react';

class BNOA extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0
    }
  }
  componentWillMount(){
    var that = this
    this.props.socket.on('BNOA', ({x,y,z})=>{
      that.setState({x: x,y: y,z: z})
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
      </div>
    );
  }
}

export default BNOA;
