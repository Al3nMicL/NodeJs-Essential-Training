const fs = require("fs");

// create a temp file to demo how we can use fs rename
fs.appendFile("./assets/file.txt", `Hello World! \n`, err => {
    if (err) { throw err; }
});
console.log("\ncreated file.txt in assets sub folder");

// now rename the file - *tip: open the tree view in your code editor to see it in action!
setTimeout(() => {
    fs.renameSync("./assets/file.txt", "./assets/temp_file.txt");
    console.log("renamed file.txt to temp_file.txt in assets sub folder");
}, 1000);

// move another file to a different location
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) { throw err; }
});
console.log("moved notes.md from assets sub folder to storage-files sub folder");

// move it back (after a few seconds)
setTimeout(() => {
    fs.rename("./storage-files/notes.md", "./assets/notes.md", err => {
        if (err) { throw err; }
    });
    console.log("moved notes.md back from storage-files sub folder to assets sub-folder");
}, 2000);

// remove the temp file made earlier
setTimeout(() => {
    fs.unlinkSync("./assets/temp_file.txt");
    console.log("deleted temp_file.txt in assets sub folder\n");
}, 4000);