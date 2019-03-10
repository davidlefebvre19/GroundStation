const fs = require('fs')
var SerialPort = require("serialport");

var serialport = new SerialPort("/dev/ttyUSB0",{
baudRate: 9600,
parser: SerialPort.parsers.readline("\n")
});

serialport.on('open', function(){
    console.log('---Lancement lecture---');
    serialport.on('data', function(data){
        data = data.replace(/\uFFFD/g, '')
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
        handleBNO(cleanData(data)) 
    }else if(h.includes("GPS")){
        /* to do */
    }else if(h.includes("BNOZ")){
        /* to do */
    }else if(h.includes("ERROR")){
       console.log("donnee non dispatchable "+data) 
    }
}

function handleBNO(datas){
    console.log(datas.join(";"))
}

/*
BNOA: x;x;x
BNOZ: x;x;x
GPS: x;x;x
*/
