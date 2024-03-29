const fs = require('fs')
var SerialPort = require("serialport");
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});
var LORA = 'LORA'
var serialport = new SerialPort("/dev/ttyUSB1",{
baudRate: 9600,
parser: SerialPort.parsers.readline("/n")
});

serialport.on('open', function(){
    console.log('---Lancement lecture---');
    serialport.on('data', function(data){
        //console.log(data)
        //if(!isNaN(data)){
            //data = data.split("+")
            //data = data[0]
            data = data.replace(/\uFFFD/g, '') //regex
            dispatch(data);
          //}

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
        let millis = new Date().getTime()
        now = now.toLocaleTimeString();
            fs.appendFile(text+'.txt',now+";"+millis+";"+text+";"+response.join(";")+"\n",(err)=>{
        })
    
        return response //[5.9,-8.7,6]
    }
  }
function dispatch(data){
    console.log(data)
    /*if(isNaN(data)){
        return(true);
    }*/
    let h = getHeader(data)
    console.log(h)
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
    socket.emit(LORA+"BNOA", {x:datas[0], y:datas[1], z:datas[2]})
}

function handlePITOT(datas){
    console.log(datas.join(";"))
    socket.emit(LORA+"PITOT", {x:datas[0]})
}

function handleBMP(datas){
    console.log(datas.join(";"))
    socket.emit(LORA+"BMP", {temp:datas[0], pres:datas[1], alt:datas[2], hum:datas[3], gas:datas[4]})
}

function handleGPS1(datas){
    console.log(datas.join(";"))
    socket.emit(LORA+"GPS1", {Lat:datas[0], Lon:datas[1], alt:datas[2]})
}

function handleGPS2(datas){
    console.log(datas.join(";"))
    socket.emit(LORA+"GPS2", {x:datas[0]})
}

function handleFSR(datas){
    console.log(datas.join(";"))
    socket.emit(LORA+"FSR", {FSR:datas[0]})
}
