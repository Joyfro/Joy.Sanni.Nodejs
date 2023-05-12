/**Name : Query String
 * Description: The Query String module used to provides utilities for parsing and formatting URL query strings.It can be used to convert query string into JSON object and vice-versa.  */
import url from 'url'
import querystring from 'querystring'
 let exampleUrl =
'http://www.company.com:81/a/b/c.html?user=GEEKSFORGEEKS&year=2021#p2';
 let parsed_Url = url.parse(exampleUrl);
 let parsed_queryString = querystring.parse(parsed_Url.query);
 console.log("This is parsed URL :",parsed_Url);
 
console.log("This is parsed Query String :",parsed_queryString);
