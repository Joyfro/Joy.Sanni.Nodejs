 /* Name: cluster
   Description: Allows for the creation of child processes (workers) to handle incoming network 
   Example: Creating a cluster of workers to handle HTTP server requests.
*/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
  }).listen(8000);
  
  console.log(`Worker ${process.pid} started`);
}
