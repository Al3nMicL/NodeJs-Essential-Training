const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n${questions[i]}`); // index can be incremented to loop through questions array
  process.stdout.write(` > `);
};

ask();

const answers = []
process.stdin.on("data", data =>  {
  answers.push(data.toString().trim());
  answers.length < questions.length ? ask(answers.length) : process.exit(); // ternary if else
  // Explanation: If answers array length is less than the questions array, invoke the ask function
  // since answers array starts at 0, it will effectively loop through each question as the array length increases,
  // each time an answer from standard in is captured. Once the condition fails, process exit is called and the
  // standard input on data listener function will cease execution.
});

process.on('exit', () => {
  const [name, activity, lang] = answers; // array destructure
  console.log(`\nThank you for your answers, ${name}.\nNow go ${activity}, you can write ${lang} code later. :D\n`)
});