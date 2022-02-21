const { random_questions, questions, loadQuestions } = require("./lib/loadQuestions");
const collectAnswers = require("./lib/collectAnswers");

loadQuestions(random_questions, questions); 

const displayAnswers = (answers, questions) => {
    for (let i=0; i < answers.length; i++) {
        console.log(`I asked: ${questions[i]}`);
        console.log(`You answered: ${answers[i]}\n`);
    }
};

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", answer => {
    console.log(`you answered: ${answer}`)
});

answerEvents.on("complete", answers => {
    console.log("\nThanks for your answers!\n");
    displayAnswers(answers, questions);
    process.exit();
});