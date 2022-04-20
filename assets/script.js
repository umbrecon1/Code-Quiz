
// Variables

var questionsEl = document.getElementById("questions");
var timeEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var intitialsEl = document.getElementById("initials");
var optionsEl = document.getElementById("options");
var imageEl = document.getElementById("image");
var feedbackEl = document.getElementById("feedback");

var questionIndex = 0;
var time = 30;
var timer;


// Start Quiz
function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    // make questions visible
    questionsEl.removeAttribute("class");


    //start countdown
    timer = setInterval(countdown, 1000);

    timeEl.textContent = time;
    // Invoke the questions
    askQuestion();

}

function askQuestion() {
    var currentQuestion = questions[questionIndex];
    optionsEl.innerHTML = ""
    imageEl.innerHTML = ""


    // Get question
    var titleEl = document.getElementById("question-ask");
    titleEl.textContent = currentQuestion.title;
    //Display image

    var picture = currentQuestion.image;
    var img = document.createElement("img");
    img.setAttribute("src", picture);
    imageEl.appendChild(img);

    // Reset the options element 



    // Choices Loop -- needed help with this one
    currentQuestion.options.forEach(function (choice) {
        // create new button for each choice
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = choice;

        // attach click event listener to each choice
        choiceNode.onclick = questionClick;

        // display on the page
        optionsEl.appendChild(choiceNode);
    });
}
function questionClick() {
    // Check answer
    //If Correct
    if (this.value === questions[questionIndex].answer) {
        time += 5;
        timeEl.textContent = time;
        
        feedbackEl.textContent = ("Correct!");
        feedbackEl.setAttribute("class", "feedbackCorrect");
        setTimeout(function() {
            feedbackEl.setAttribute("class", "feedback hide");
          }, 500);
        questionIndex++;
        // If incorrect
    } else {
        time -= 5;
        timeEl.textContent = time;
        feedbackEl.textContent = ("Wrong!");
        feedbackEl.setAttribute("class", "feedbackWrong");



        if (time <= 0) {
            time = 0;
            endQuiz();
        }
    }
    

    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        askQuestion();
    }

}


// Ending the quiz
function endQuiz() {
    clearInterval(timer);

    var endscreenEl = document.getElementById("end");
    endscreenEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");


}



// Timer
function countdown() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
        quizEnd()
    }



}

// Saving results
function saveHighscore() {
    
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
    
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      var newScore = {
        score: time,
        initials: initials
      };
  
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      window.location.href = "highscores.html";
    }
  }




// Buttons
startBtn.onclick = startQuiz;
submitBtn.onclick = saveHighscore;









