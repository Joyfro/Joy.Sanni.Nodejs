/* Name: URL
   Description: Parses and constructs URLs. 
   Example: Parsing a URL and extracting its components.
*/

const { URL } = require('url');

const myUrl = new URL('https://example.com/path?id=123');
console.log(myUrl.host); // Output: example.com
console.log(myUrl.searchParams.get('id')); // Output: 123
