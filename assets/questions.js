
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What is the capital of the USA?", ["New York", "Washington D.C.","Chicago", "Los Angeles"], "Washington D.C."),
    new Question("What is the capital of China?", ["Beijing", "Shanghai", "Tianjin", "Hong Kong"], "Beijing"),
    new Question("What is the capital of Brazil?", ["São Paulo", "Rio de Janeiro","	Brasília", "Salvador"], "Brasilia"),
    new Question("What is the capital of India?", ["Mumbai", "New Delhi", "Hyderabad", "Jaipur"], "Mumbai"),
    new Question("What is the capital of Russia", ["Moscow", "St Petersburg", "Kazan", "Sochi"], "Moscow")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz







window.onload = function () {
    start();
  }

  var intervalId;
  var clockRunning = false;
  var time = 0;
  var lap = 1;



  function start() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }



  }

  function count() {
    //  TODO: increment time by 1, remember we cant use "this" here.
    time++;
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
    var currentTime = timeConverter(time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
    $("#display").text(currentTime);
  }



  var seconds;

  function timeConverter(t) {

    var minutes = Math.floor(t / 60);
     seconds = t - (minutes * 60);

    if (seconds < 15) {
      seconds = "0" + seconds;
      populate();

    }
    else
    {
      seconds = "Times Up";

      showScores();
     


    }




    return seconds;
  }

