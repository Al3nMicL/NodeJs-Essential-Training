const path = require("path");
const os = require("os");

const chapter06_examples_dir = path.join(__dirname, "..", "..", "ch06");

// calling path join inside a file makes the __dirname return the directory that the script is currently in,
// to traverse up this directory and find others, use the .. that you would use in a terminal to go up a directory

console.log(chapter06_examples_dir); // will just output the full path to the chapter 06 examples
