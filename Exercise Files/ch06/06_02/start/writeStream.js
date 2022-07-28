const fs = require("fs");

let filePath = "./assets/myFile.md";
let encoding = "UTF-8";

const writeStream = fs.createWriteStream(filePath, encoding);

writeStream.write("# Hello World!");
writeStream.write(" :wave:  ");

console.log("file written successfully... \n");