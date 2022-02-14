const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

process.stdin.on("data", data => {
  const input = data.toString().trim();
  if (input === "exit" || input === "quit") {
    emitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  emitter.emit("customEvent", input, "terminal");
});

console.log("Type any text, then press enter to output into the current terminal...")
console.log("Type 'exit' or 'quit' to leave.\n")