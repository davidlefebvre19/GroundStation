const io = require('socket.io')();
io.on('connection', client => {
    client.on('ORI', (data) => { 
        console.log(data);
        client.broadcast.emit("ORI",data)
    }); 
  });
io.listen(3000);

