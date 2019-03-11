const io = require('socket.io')();
io.on('connection', client => {
    client.on('BNOA', (data) => { 
        console.log(data);
        client.broadcast.emit("BNOA",data)
    }); 
  });
io.listen(3000);

