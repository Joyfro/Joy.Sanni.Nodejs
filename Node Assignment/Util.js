/* Name: Util
   Description: Contains utility functions that are commonly used in Node.js applications. 
   Example: Converting an object to a string representation.
*/

const util = require('util');

const obj = { name: 'John', age: 25 };
const str = util.inspect(obj);

console.log(str); // Output: { name: 'John', age: 25 }
