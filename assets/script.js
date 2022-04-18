
// Variables

var questionsEl = document.getElementById("questions");
var timeEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var intitialsEl = document.getElementById("initials");
var choicesEl = document.getElementById("choices");
var imageEl = document.getElementById("image");

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
    timer = setInterval(countdown, 1000);

    timer.textContent = time;
// Invoke the questions
    askQuestion();
    
}

function askQuestion() {
    var currentQuestion = questions[questionIndex]
    


// Get question
    var titleEl = document.getElementById("question-ask");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

//Display image

    var picture = currentQuestion.image;
    var img = document.createElement("img");
    img.setAttribute("src", picture);
    imageEl.append(img);
}

// Timer
function countdown() {
    time--;
    timer.textContent = time;
}


// Questions


//Ending the quiz


// Saving results


// Buttons
startBtn.onclick = startQuiz;









