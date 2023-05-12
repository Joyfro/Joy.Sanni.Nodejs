/**Name : domian Module
 * Description:It creates a user-defined data type that can have optional constraints. Deprecated. To handle unhandled errors*/

const domain = require('domain');
const http = require('http');

const server = http.createServer((req, res) => {
  const d = domain.create();

  d.on('error', (err) => {
    console.error('Error caught by domain:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });

  d.run(() => {
    // Your code goes here
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
})

