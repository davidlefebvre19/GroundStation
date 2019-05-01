var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', { reconnect: true });
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// imagine l usb js
setInterval(function () {
  socket.emit("BNOA", { x: getRandomInt(500), y: getRandomInt(500), z: getRandomInt(500) })
  socket.emit("PITOT", { x: getRandomInt(50) })
  socket.emit("LORABMP", { alt: getRandomInt(50) })
  //socket.emit("LORAGPS1", { Lat: getRandomInt(50),Lon: getRandomInt(50),alt: getRandomInt(50)})

  // socket.emit("LORABNOA",{x: getRandomInt(500),y: getRandomInt(500),z: getRandomInt(500)})

}, 1000)

