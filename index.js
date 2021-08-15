var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question(chalk.whiteBright.bgMagenta("\nHello Contestant!!\nWhat is your name?\n\n"));
console.log("\nWelcome " + userName + ", to the MARVEL quiz.\n");

// intialize empty score variable
var score = 0;

//quiz questtions and answers
var quizQA1 = {
  question: "1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
  a: "a. 2005",
  b: "b. 2008",
  c: "c. 2010",
  d: "d. 2012",
  correctAnswer: "b",
};
var quizQA2 = {
  question: "2. What is the name of Thor’s hammer?",
  a: "a. Vanir",
  b: "b. Mjolnir",
  c: "c. Aesir",
  d: "d. Norn",
  correctAnswer: "b",
};
var quizQA3 = {
  question: ". In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
  a: "a. That he wants to study The Hulk",
  b: "b. That he knows about S.H.I.E.L.D.",
  c: "c. That they are putting a team together",
  d: "d. That Thaddeus owes him money",
  correctAnswer: "c",
};
var quizQA4 = {
  question: "4. What is Captain America’s shield made of?",
  a: "a. Adamantium",
  b: "b. Vibranium",
  c: "c. Promethium",
  d: "d. Carbonadium",
  correctAnswer: "b",
};
var quizQA5 = {
  question: "5. The Flerkens are a race of extremely dangerous aliens that resembles what?",
  a: "a. cats",
  b: "b. Ducks",
  c: "c. Reptiles",
  d: "d. Raccoons",
  correctAnswer: "a",
};
var quizQA6 = {
  question: "6. In which movie, Captain America is capable of lifting Thor's hammer?",
  a: "a. Avenger Endgame",
  b: "b. The Avengers",
  c: "c. Age of Ultron",
  d: "d. Avenger Infinity",
  correctAnswer: "c",
};

// quiz qa array
var quizQA = [quizQA1, quizQA2, quizQA3, quizQA4, quizQA5, quizQA6];
var highScore = 18;


function askQuestion() {
  console.log(chalk.bgCyan.bold(currentQuiz + "\n"));
  console.log(optionA);
  console.log(optionB);
  console.log(optionC);
  console.log(optionD);
  var yourAnswer = readlineSync.question(chalk.black.bgYellow("\nChoose between the four choices and press enter to lock your conformation\n"));
  if (yourAnswer.toLowerCase() === quizQA[i].correctAnswer) {
    score = score + 3;
    console.log(chalk.green("\nCorrect!\n"));
  }
  else {
    score = score - 2;
    console.log(chalk.red("\nOhh! you chose worng answer."));
  }
  console.log("----------------------------");
  console.log("the current Score is : " + score);
  console.log("----------------------------");
}

var userLearnQuiz = readlineSync.keyInYN("Would you like to learn the scoring method for this Marvel Quiz!\n")
if (userLearnQuiz == true) {
  console.log("That's Great." + userName + "\n");
  console.log(chalk.bgBlue("RULES FOR THE GAME\n"));
  console.log('a. All question are compulsory')
  console.log('b. Total number of question is 5')
  console.log('c. Each right answer will give you 3 point and worng answer take 2 point from it.\n')
  console.log(chalk.bgBlue('Good Luck!!\n'))
}
else {
  console.log("\nThank you!! for your response" + userName + ",Good Luck!\n")
}

for (i = 0; i < quizQA.length; i++) {
  var currentQuiz = quizQA[i].question;
  var optionA = quizQA[i].a;
  var optionB = quizQA[i].b;
  var optionC = quizQA[i].c;
  var optionD = quizQA[i].d;
  askQuestion();
  console.log("\nThanks for playing, " + userName);
  scoreTable();
}

function scoreTable() {
  if (score === highScore) {
    console.log("\nCongratulations! " + userName + ". your score is " + score + "\nWOW! you got the highest score on this MARVEL QUIZ\n");
  }
  else {
    console.log("You couldn't get the highest score.\nBetter Luck Next Time! Have a great day! " + userName + ".\nYour Score is " + score);
  }
}