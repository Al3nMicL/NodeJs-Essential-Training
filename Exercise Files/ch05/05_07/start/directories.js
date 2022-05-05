const fs = require("fs");

// must create directory 'temp' inside cwr before running this script in terminal
// fs.renameSync("./temp", "./temp-files"); // rename a directory

let dirname = "./temp-files";

// try adding some files to see if the try catch block executes below
// i.e. in terminal, type: touch temp-files/empty-file-{1..5}.txt
fs.rmdir(dirname, err => {       
    try {
        if (err) { throw err; }
        console.log(`${dirname} directory removed!`);
    } catch (ENOTEMPTY) {
        // remove any files present in the directory first
        fs.readdirSync(dirname).forEach(fileName => {
            fs.unlinkSync(`${dirname}/${fileName}`);
        });
        // then remove the directory
        fs.rmdir(dirname, err => {
            if (err) { throw err; }
        });
    }
});