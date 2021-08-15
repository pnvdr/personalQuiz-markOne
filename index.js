var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;
var userName = readlineSync.question(chalk.whiteBright.bgMagenta("\nHello Contestant!!\nWhat is your name?\t\n"));
console.log(chalk.whiteBright("\nWelcome "+userName+", to the personal quiz about Nagavasudev.\n"));

// answer validation and score tracker
function playQuizQA(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.black.bgGreen("you are correct!"));
    score = score + 1;
  }
  else{
    console.log(chalk.black.bgRed("Wrong answer\nThe correct answer is : "+answer));
  }
  console.log("----------------------------");
  console.log("the current Score is : "+score);
  console.log("----------------------------");
}

//quiz questions and their answers
var quizQA1 = {
  question: chalk.black.bgYellow("Where is Nagavasudev, currently staying?\n"),
  answer: "Home",
}
var quizQA2 = {
  question: chalk.black.bgYellow("What is Nagavasudev's Favorite dish?\n"),
  answer: "Biriyani",
}
var quizQA3 = {
  question: chalk.black.bgYellow("Which is my favourite vacation spot?\n"),
  answer: "Ooty",
}
var quizQA = [quizQA1, quizQA2, quizQA3];

for (var i = 0; i < quizQA.length; i++){
  var currentQA = quizQA[i];
  playQuizQA(currentQA.question,currentQA.answer);
}

console.log("YAY!!\nCongratulations on finishing the quiz\nYour Score is | "+score+" |.")