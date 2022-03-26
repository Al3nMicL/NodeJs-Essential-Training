const {writeFile} = require("fs");

const mytext = "Hello World!";

writeFile("./assets/readme.txt", mytext, err => {
    if (err) { 
      console.log(`An error has occured: ${err.message}`); 
      process.exit()
    }
    console.log("file written successfully!")
});