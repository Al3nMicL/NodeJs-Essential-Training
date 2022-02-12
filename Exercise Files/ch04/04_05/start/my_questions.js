const { random_questions, questions, loadQuestions } = require("./lib/loadQuestions");
const collectAnswers = require("./lib/collectAnswers");

loadQuestions(random_questions, questions); 

collectAnswers(questions, answers => {
    console.log("\nThanks for your answers!\n");
    console.log(`I asked: ${questions[0]}`);
    console.log(`You answered: ${answers[0]}\n`);
    console.log(`I asked: ${questions[1]}`);
    console.log(`You answered: ${answers[1]}\n`);
    console.log(`I asked: ${questions[2]}`);
    console.log(`You answered: ${answers[2]}\n`);
    console.log("That's all for now!\n");
    process.exit();
});