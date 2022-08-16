const chProc = require("child_process");
const os = require("os");

// executes child process based on OS environment
if (os.platform() == "darwin" || "linux") {
    chProc.exec("env", (err, data, stderr) => { 
        if (err) { console.log(stderr); } // show error output from shell
        console.log(data); // prints all shell environment variables
    });

} else if (os.platform() == "win32") {
    chProc.exec("set", (err, data) => {
        if (err) { throw err; } // show errors from node process
        console.log(data); // prints all shell environment variables
    });

} else {
    console.log("wth are you on... BSD?"); // >_<
}
