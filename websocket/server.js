const io = require('socket.io')();
io.on('connection', client => {
    client.on('BNOA', (data) => {
        console.log(data);
        client.broadcast.emit("BNOA",data)
    });
    client.on('SPEEDPITOT', (data) => {
        console.log(data);
        client.broadcast.emit("SPEEDPITOT",data)
    });
  });
io.listen(3000);

