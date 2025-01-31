/* here is Synchronous code means block code
*/
const fs = require('fs');
console.log("befor data read");
const data = fs.readFileSync('a.txt','utf-8');
console.log(data);
console.log("After data read")