import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import L from 'leaflet';

export default class Gps extends Component {
   constructor(props) {
     super(props);

     this.state = {
       Lat: 0,
       Lon: 0,
       alt: 0,
       marker: null,
       lora: props.lora
     }
   }
  componentDidMount(){

  }
  componentWillMount(){
      const socket = this.props.socket
      var that = this
      var that = this
      var txt = ""
      if(this.state.lora){
        txt = "LORAGPS1"
      }else{
        txt = "GPS1"
      }
      socket.on(txt, ({Lat,Lon,alt}) => {
        that.state.marker.setLatLng(new L.LatLng(Lat,Lon));
        that.setState({
          Lat: Lat,
          Lon: Lon,
          alt: alt,
        })
      })
   }
   
   
   componentDidMount(){
      var mymap = L.map('mapid').setView([50.802557, 4.404390], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamNociIsImEiOiJjamluOGs4dXQwYmVuM3FxN2o5ajlsMHQ5In0.91W6DkAdYlnty7ViosJwkw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      var marker          = L.marker(mymap.getCenter()).addTo(mymap);
      this.setState({marker: marker})
      var newLatLng = new L.LatLng(50.822557,4.414390);
      marker.setLatLng(newLatLng);

   }
   

     render() {

       return (

         <div className="col m12 s12">
           <div className="card white">
             <div className="card-content">

               <div className="card-title">
                 <p>Location of CanSat</p>
               </div>

               <div className="row" id="mapid" style={{height: "300px"}}>
               </div>

               <p>Location: {this.state.Lat}; {this.state.Lon},   Altitude {this.state.alt}m</p>

             </div>
           </div>
         </div>

       );
   }
}
