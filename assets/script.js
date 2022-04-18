
// Variables

var questionsEl = document.getElementById("questions");
var timeEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var intitialsEl = document.getElementById("initials");
var choicesEl = document.getElementById("choices");

var questionIndex = 0;
var time = 90;
var timer;


// Start Quiz
function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    // make questions visible
    questionsEl.removeAttribute("class");

    //start countdown
    timer = setInterval()

}

// Timer
function countdown() {
    time--;
    timer.textContent = time;
}


// Questions


//Ending the quiz


// Saving results









