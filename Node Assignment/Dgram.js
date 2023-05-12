/* Name: Dgram
   Description: Enables the use of UDP (User Datagram Protocol) sockets for networking operations. 
   Example: Creating a UDP server that echoes received messages back to the client.
*/

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  server.send(msg, 0, msg.length, rinfo.port, rinfo.address);
});

server.bind(3000);
