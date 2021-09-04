console.log("attached");

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var submitQuiz = document.getElementById('results')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-options')
var buttonEl = document.getElementById('')
var answerButtons = document.getElementsByClassName('btn')
var resultsButton = document.getElementById('submit')
var questionTxtContainer = document.getElementById('question-txt')
var questionNumber = 0
var timerDivEl = document.getElementById('timer')
//start game with a score of 0 
var score= 0;

//questions + answers object array
const questions = [
  {
    question: 'Inside which HTML element do we put the js',
    answers: [
      { text: 'script tag', correct: true },
      { text: 'scripting', correct: false },
      { text: 'js', correct: false }
    ]
  },

  {
    question: 'What is a var in terms of javascript?',
    answers: [
      { text: 'a name assigned to a literal value or object', correct: true },
      { text: 'the quality or state of having different types', correct: false },
      { text: 'value-added resource', correct: false }
    ]
  },

  {
    question: 'read as js statement and solve: consolelog(2.0=="2"== newBoolean(true)=="1")',
    answers: [
      { text: 'true', correct: true },
      { text: 'false', correct: false },
      { text: '-1', correct: false }
    ]
  },

  {
    question: 'HTML, Javascript, or CSS?',
    answers: [
      { text: 'Javascript', correct: true },
      { text: 'HTML', correct: false },
      { text: 'CSS', correct: false }
    ]
  },

  {
    question: 'Explain the keyword this.',
    answers: [
      { text: 'refers to the object that the function is a property of', correct: true },
      { text: 'null', correct: false },
      { text: 'this', correct: false }
    ]
  },
]

//event listeners for start, next and submit (results) button 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextQuestion)
resultsButton.addEventListener('click', endGame)

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
  questionTxtContainer.textContent= questions[questionNumber].question
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




//buttonEl.addEventListener('click', quizBoxHandler);
