/* Name: Stream
   Description: Provides an interface for streaming data, including readable and writable streams. 
   Example: Piping data from a readable stream to a writable stream.
*/

const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
