const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const random_questions = [
    "What is your favourite team game to play? ",
    "Anything interesting you’ve watched lately? ",
    "What is the one recent trend you can’t stand? ",
    "Is there anything that annoys you about travelling? ",
    "What is your favourite drink? ",
    "What is one song you can’t help but sing along to? ",
    "What is your current pet peeve? ",
    "Who was the first YouTuber you discovered? ",
    "Do you remember when you first logged onto the internet? ",
    "If you decided to run for President, what would your campaign slogan be? "
    // source - https://www.brightful.me/blog/random-questions-to-ask-start-a-conversation
];

let questions = []; 

const loadQuestions = (source, target) => {
    let questions_to_ask = 3;
    let questions_amount = source.length;
    
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    } // creates a random number, using whole numbers
    // of questions available from the source array

    if (target.length < questions_to_ask) {
        let newLocal = getRandomInt(questions_amount);

        target.push(source[newLocal]);        
        // call function again until condition fails
        loadQuestions(random_questions, questions);
    }
    
}

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;
  
    const questionAnswered = answer => {
      answers.push(answer);
      if (answers.length < questions.length) {
        rl.question(questions[answers.length], questionAnswered);
      } else {
        done(answers);
      }
    };
  
    rl.question(firstQuestion, questionAnswered);
  };
  

loadQuestions(random_questions, questions); // load em' up!

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