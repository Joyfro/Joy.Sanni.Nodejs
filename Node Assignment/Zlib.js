/* Name: Zlib
   Description: Provides compression and decompression capabilities using the zlib library. 
   Example: Compressing a string using gzip compression.
*/

const zlib = require('zlib');

const input = 'Hello, World!';
zlib.gzip(input, (err, compressed) => {
  if (err) throw err;
  console.log(compressed.toString('base64')); // Output: H4sIAAAAAAAACsI0UQrCMAyF4SrX5QIAAA==
});

