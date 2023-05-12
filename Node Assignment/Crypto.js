/* Name: Crypto
   Description: Offers cryptographic functionality, including hash functions and encryption. 
   Example: Generating an MD5 hash.
*/

const crypto = require('crypto');

const hash = crypto.createHash('md5');
hash.update('Hello, World!');
console.log(hash.digest('hex')); // Output: 6cd3556deb0da54bca060b4c39479839
