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

module.exports = {
    random_questions,
    questions,
    loadQuestions
}