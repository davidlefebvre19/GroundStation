const fs = require('fs')
var SerialPort = require("serialport");
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});
var root = ''
var serialport = new SerialPort("/dev/ttyUSB0",{
baudRate: 9600,
parser: SerialPort.parsers.readline("\n")
});

function createMap(values){
    /* options = {
    url: "https://maps.googleapis.com/maps/api/staticmap?path=color:0x0000ff|weight:5|"+values.join("|")+"&maptype=satellite&size=650x512",
    dest: '../public/photo.jpg'        // Save to /path/to/dest/photo.jpg
    }
    download.image(options)
    .then(({ filename, image }) => {
    console.log('File saved to', filename)
    }).catch((err) => {
      console.log("error")
    }) */
  }
  function median(values) {
  
      values.sort( function(a,b) {return a - b;} );
  
      var half = Math.floor(values.length/2);
  
      if(values.length % 2)
          return values[half];
      else
          return (values[half-1] + values[half]) / 2.0;
  }


serialport.on('open', function(){
    console.log('---Lancement lecture---');
    serialport.on('data', function(data){
        data = data.replace(/\uFFFD/g, '') //regex
        dispatch(data);
    });
   });

function getHeader(data){
    let response = data.split(": ")
    if(response.length>1){
        return response[0].trim()
    }else{
        return "ERRREUR";
    }
}
function cleanData(data){
    var response = []
    let text = getHeader(data)
    if(text != "ERRREUR"){
       if(data.includes(":")){
            data = data.replace(/\s/g,'') // "BNO: 5.9; -8.6;5.7" -> // "BNO:5.9;-8.6;5.7"
            data = (data.split(":")[1])// "BNO:5.9;-8.6;5.7" -> "5.9;-8.6;5.7 "
            data.split(";").map(function(value){ //"5.9","-8.6"
                if(isNaN(parseFloat(value))){
                    //nothing
                    }else{
                    response.push(parseFloat(value))
                    }
                })
        }
    
        let now = new Date();
        now = now.toLocaleTimeString();
            fs.appendFile(text+'.txt',now+";"+text+";"+response.join(";")+"\n",(err)=>{
        })
    
        return response //[5.9,-8.7,6]
    }
  }
function dispatch(data){
    let h = getHeader(data)
    if(h.includes("BNOA")){
        handleBNOA(cleanData(data))
    }else if(h.includes("PITOT")){
        handlePITOT(cleanData(data))
    }else if(h.includes("BMP")){
        handleBMP(cleanData(data))
    }else if(h.includes("GPS1")){
        handleGPS1(cleanData(data))
    }else if(h.includes("GPS2")){
        handleGPS2(cleanData(data))
    }else if(h.includes("FSR")){
        handleFSR(cleanData(data))
    }else if(h.includes("ERROR")){
       console.log("donnee non dispatchable "+data) 
    }
}

function handleBNOA(datas){
    console.log(datas.join(";"))
    socket.emit(root+"BNOA", {x:datas[0], y:datas[1], z:datas[2]})
}

function handlePITOT(datas){
    console.log(datas.join(";"))
    socket.emit(root+"PITOT", {x:datas[0]})
}

function handleBMP(datas){
    console.log(datas.join(";"))
    socket.emit(root+"BMP", {temp:datas[0], pres:datas[1], alt:datas[2], hum:datas[3], gas:datas[4]})
}

function handleGPS1(datas){
    console.log(datas.join(";"))
    socket.emit(root+"GPS1", {Lat:datas[0], Lon:datas[1], alt:datas[2]})
}

function handleGPS2(datas){
    console.log(datas.join(";"))
    socket.emit(root+"GPS2", {x:datas[0]})
}

function handleFSR(datas){
    console.log(datas.join(";"))
    socket.emit(root+"FSR", {FSR:datas[0]})
}


