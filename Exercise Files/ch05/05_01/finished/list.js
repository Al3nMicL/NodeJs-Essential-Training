const fs = require("fs");
// asynchronous function call
fs.readdir("./assets", (err, files) => { // this method is non-blocking
  if (err) {
    throw err;
  }
  console.log("complete");
  console.log(files);
});

console.log("started reading files");
