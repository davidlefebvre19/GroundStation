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
    client.on('LORABNOA', (data) => { 
        console.log(data);
        client.broadcast.emit("LORABNOA",data)
    }); 
    client.on('LORAPITOT', (data) => {
        console.log(data);
        client.broadcast.emit("LORAPITOT",data)
    });
    client.on('LORABMP', (data) => {
        console.log(data);
        client.broadcast.emit("LORABMP",data)
    });
  });
io.listen(3000);

