/**Name : String Decoder Module
 * Description: The string Decoder module provides an API for decoding Buffer objects into strings  */

const { StringDecoder } = require("string_decoder");
  
const decoder = new StringDecoder("utf-8");
  
const text_one = Buffer.from("GeeksforGeeks", "utf-8");
let decoded_text = decoder.write(text_one);
console.log("Decoded Text:", decoded_text);
