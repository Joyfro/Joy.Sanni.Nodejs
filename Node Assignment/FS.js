/* Name: FS
   Description: Offers file system-related operations such as reading, writing, and modifying files.
   Example: Reading a file and logging its content.
*/

const fs = require('fs');

fs.readFile('cluster.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
