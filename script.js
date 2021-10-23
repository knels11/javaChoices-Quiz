console.log("attached");

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var submitQuiz = document.getElementById('results')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-options')
var buttonEl = document.getElementById('')
var answerButtons = document.getElementsByClassName('btn-grid')
var resultsButton = document.getElementById('submit')
var questionTxtContainer = document.getElementById('question-txt')
var questionNumber = 0
var timerDivEl = document.getElementById('timer')
var nextQuestion = document.getElementById('question-txt')
//start game with a score of 0 
var score= 0;

//event listeners for start, next and submit (results) button 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextQuestion)
resultsButton.addEventListener('click', endGame)
answerButtons.addEventListener('click', startGame);


//start quiz
function startGame() {
  //create timer
  var count = 60, timer = setInterval(function() {
    timerDivEl.innerHTML = count--;
    if(count == 1) clearInterval(timer);
}, 1000);
//hide the start button once the quiz begins
  startButton.setAttribute('class', 'hide')
  questionTxtContainer.textContent= questions[0].question
}
//loop over every question object 
for (var i = 0; i < questions.length; i++) {
  //display current question to user and ask ok/cancel
  var answer = confirm(questions[i].q);
console.log(answer);

  //compare answers
  if ((answer === true && questions[i].a === "t") ||
  (answer === false && questions[i].a === "f")) {
    //increase score
    score++;
    alert("correct!");
  }
  else {
    alert("wrong!");
  }
}
//show total at end
alert("you got" + score + "/" + questions.length);

//on click, listen for user answer
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', nextQuestion)
}




//change question
function changeQuestion(){
  questionTxtContainer.textContent= questions[i].question
}
//next question
function nextQuestion(event) {
  console.log(event.target.value);
  questionNumber++;
  changeQuestion();
}

//at the end of the quiz, show the results /total 
function endGame() {
  console.log(resultsButton);
}






