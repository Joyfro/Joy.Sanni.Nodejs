/* Name: Inspector
   Description: Provides a debugging and profiling interface for Node.js applications. It allows for remote debugging and performance analysis. 
   Example: Starting a debugging session for a Node.js script.
*/

const inspector = require('inspector');

inspector.open();
console.log('Debugger listening on port ' + inspector.url().port);
