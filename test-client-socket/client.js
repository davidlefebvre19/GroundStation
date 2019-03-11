var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

// imagine l usb js
socket.emit("BNOA",{x: 50,y: 90,z: 100})
