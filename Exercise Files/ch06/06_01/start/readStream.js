const fs = require("fs");

let filePath = "./assets/lorum-ipsum.md"; 
let encoding = "UTF-8";
let fileTxt = "";
const readStream = fs.createReadStream(filePath, encoding);

// console.log("type something...");

readStream.on("data", data => {
  // console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

readStream.once("data", data => {
  console.log(data);
});

readStream.on("end", () =>{
  console.log("\nEnd of stream data.");
  console.log(`Stream was ${fileTxt.length - 1} characters long.`);
});