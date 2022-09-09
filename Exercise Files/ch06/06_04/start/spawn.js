const chProc = require("child_process");

const fileName = "../../../ch04/04_03/start/my_questions.js";
// const myQuestionsApp = chProc.spawn("node", [fileName] ); // open from relative path above

// myQuestionsApp.stdout.on("data", data => {
//     console.log(`${data}`);
// });

// myQuestionsApp.on("close", () => {
//     console.log(`myQuestionsApp has exited`);
// });

// use spawnSync because spawn is asynch and will not display other questions
const myQuestionsAppSync = chProc.spawnSync(
    "node",
    [fileName],
    {
        encoding : 'utf-8',
        stdio : 'inherit'
    }
);
