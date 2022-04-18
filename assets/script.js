
// Variables

var questionsEl = document.getElementById("questions");
var timeEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var intitialsEl = document.getElementById("initials");
var choicesEl = document.getElementById("choices");
var imageEl = document.getElementById("image");

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



    // Get question
    var titleEl = document.getElementById("question-ask");
    titleEl.textContent = currentQuestion.title;
    //Display image

    var picture = currentQuestion.image;
    var img = document.createElement("img");
    img.setAttribute("src", picture);
    imageEl.appendChild(img);

// Reset the options element
    optionsEl.innerHTML = "";    



    // Choices Loop -- needed help with this one
    currentQuestion.choices.forEach(function (choice, i) {
            // create new button for each choice
            var choiceNode = document.createElement("button");
            choiceNode.setAttribute("class", "choice");
            choiceNode.setAttribute("value", choice);

            choiceNode.textContent = i + 1 + ". " + choice;

            // attach click event listener to each choice
            choiceNode.onclick = questionClick;

            // display on the page
            choicesEl.appendChild(choiceNode);
        });
}



// Timer
function countdown() {
    time--;
    timeEl.textContent = time;


}


// Questions


//Ending the quiz


// Saving results


// Buttons
startBtn.onclick = startQuiz;









