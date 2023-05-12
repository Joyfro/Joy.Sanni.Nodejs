/* Name: Buffer
   Description: Provides a way to handle binary data. It allows for manipulation, conversion, and serialization of raw  data. 
   Example: Creating a buffer and converting it to a string.
*/

const buffer = Buffer.from('Hello, World!', 'utf8');
const str = buffer.toString('utf8');
console.log(str); // Output: Hello, World!
