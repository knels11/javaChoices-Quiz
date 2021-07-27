console.log("attached");

window.alert("Are you ready to test your javascript knowledge?");

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-options')
var buttonEl = document.getElementById('')
var answerButtons = document.getElementsByClassName('btn')
var questionTxtContainer = document.getElementById('question-txt')
var questionNumber = 0

for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', onclick)
}
startButton.addEventListener('click', startGame)
function onclick(event){
  console.log(event.target.value);
  questionNumber++;
  changeQuestion();
}
function changeQuestion(){
  questionTxtContainer.textContent= questions[questionNumber].question
}
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

//start the quiz with score of 0
var quizScore = 0;
//loop over question object array
// for (var i = 0; i < questions.length; i++) {
//   //display current question to user, ask ok or cancel
//   var answer = confirm(questions[i].q);
//   if (
//     (answer === true && questions[i].a === 't') ||
//     (answer === false && questions[i].a === 'f')
//   ) {
//     //increase score
//     score++;
//   }
// }
function startGame() {
  startButton.setAttribute('class', 'hide')
  questionTxtContainer.textContent= questions[0].question
}

//at the end of the quiz, show the results /total 
var quizEnd = function () {
  if (quizScore < 4 || quizScore === 4) {
    //show total at end of quiz
    alert('you got' + quizScore + '/5' + questions.length);
  }
  else if (quizScore === 5) {
    alert("your score is" + quizScore + '/5' + questions.length + '.' + "Not bad, you aced the test!");
  }
};
//quizEnd();
//buttonEl.addEventListener('click', quizBoxHandler);
