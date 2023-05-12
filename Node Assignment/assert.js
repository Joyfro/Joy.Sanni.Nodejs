/**Name : Assert Module
 * Description: The assert module provides a set of assertion functions for testing and  verifying invariants. if true it will output nothing but rows an asserion error*/
const assert = require('assert');
  
let x = 4;
let y = 5;
  
try {
  
    // Checking condition
    assert(x == y);
}
catch {
  
    // Error output
    console.log(
        `${x} is not equal to ${y}`);
}
  