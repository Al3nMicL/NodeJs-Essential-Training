const {readFileSync} = require("fs");
const {readFile} = require("fs");

// const text = readFileSync("./assets/Readme.md", "UTF-8"); // blocking
// console.log(text);

readFile("./assets/Readme2.txt", "ascii", (err, text) => {
    if (err) { 
        console.log(`An error has occured: ${err.message}`); 
        process.exit();
    }
    
    console.log(text);
    console.log("file contents read");
}); // non-blocking