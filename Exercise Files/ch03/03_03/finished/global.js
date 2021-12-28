//const path = require("path");

//console.log(`The file name is ${path.basename(__filename)}`);
//const [, , firstname, lastname] = process.argv;
// console.log(`Your name is ${firstname} ${lastname}`);

const grab = flag => {
    let  indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");


console.log(process.argv);
console.log(`${greeting} ${user}!`);
// now type in terminal: node global.js --user "Yourname" --greeting "Hey Wasup, "
