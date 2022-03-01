const fs = require("fs");

console.log("started reading files...");
// synchronous function call 
const files = fs.readdirSync("./assets"); // this method is blocking
console.log(files);

console.log("complete");