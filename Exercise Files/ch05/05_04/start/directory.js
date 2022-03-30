const fs = require("fs");

const dirname = "useless-files";

fs.mkdir(dirname, err => {
    if (err) { throw err;} 
    console.log(`"${dirname}" directory was created!`)
}); // if directory already exists it throws an error!