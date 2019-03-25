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
  });
io.listen(3000);

