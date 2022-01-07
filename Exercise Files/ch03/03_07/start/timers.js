const waitTime = 3000;
const waitInterval = 500; // milliseconds = 0.5 seconds
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);
// notice that even though setTimeout is called before setInterval it does not wait until the
// first function finishes, this is because node runs asychronously by default
setInterval(incTime, waitInterval); // will run indefinetly because no clearInterval is called
// hit Ctrl + c in terminal to exit
