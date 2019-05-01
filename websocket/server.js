const io = require('socket.io')();
io.on('connection', client => {
    client.on('BNOA', (data) => {
        console.log(data);
        client.broadcast.emit("BNOA",data)
    });
    client.on('PITOT', (data) => {
        console.log(data);
        client.broadcast.emit("PITOT",data)
    });
    client.on('BMP', (data) => {
        console.log(data);
        client.broadcast.emit("BMP",data)
    });
    client.on('GPS1', (data) => {
        console.log(data);
        client.broadcast.emit("GPS1",data)
    });
    client.on('GPS2', (data) => {
        console.log(data);
        client.broadcast.emit("GPS2",data)
    });
    client.on('FSR', (data) => {
        console.log(data);
        client.broadcast.emit("FSR",data)
    });



<<<<<<< HEAD
    client.on('LORA-BNOA', (data) => { 
        console.log(data);
        client.broadcast.emit("LORA-BNOA",data)
    }); 
    client.on('LORA-PITOT', (data) => {
=======
    client.on('LORABNOA', (data) => {
        console.log(data);
        client.broadcast.emit("LORABNOA",data)
    });
    client.on('LORAPITOT', (data) => {
>>>>>>> 286086c28370f1e8917205285a02cb43c8b0a60a
        console.log(data);
        client.broadcast.emit("LORA-PITOT",data)
    });
    client.on('LORA-BMP', (data) => {
        console.log(data);
        client.broadcast.emit("LORA-BMP",data)
    });
    client.on('LORA-GPS1', (data) => {
        console.log(data);
        client.broadcast.emit("LORA-GPS1",data)
    });
    client.on('LORA-GPS2', (data) => {
        console.log(data);
        client.broadcast.emit("LORA-GPS2",data)
    });
    client.on('LORA-FSR', (data) => {
        console.log(data);
        client.broadcast.emit("LORA-FSR",data)
    });
  });
io.listen(3000);
