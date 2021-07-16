console.log("attached");

window.alert("Are you ready to test your javascript knowledge?");

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-options')

//start the quiz with score of 0
var quizScore = 0;
//loop over question object array
for (var i = 0; i < questions.length; i++) {
//display current question to user, ask ok or cancel
    var answer = confirm(  questions[i].q  );
    if (
        (answer === true && questions[i].a === 't') ||
        (answer === false && questions[i].a === 'f')
    ){
//increase score
        score++;

function startGame() {
  startButton.classList.add('hide')
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
}
]
//at the end of the quiz, show the results /total 
        var quizEnd = function() {
          if (quizScore < 4 || quizScore === 4){
      //show total at end of quiz
      alert('you got' + quizScore + '/5' + questions.length);
          }
          else if (quizScore === 5) {
              alert("your score is" + quizScore + '/5' + questions.length + '.' + "Not bad, you aced the test!");
          }
      };
      quizEnd();



//var timerEl = document.getElementById('countdown');
//var mainEl = document.getElementById('main');
//var startBtn = document.getElementById('start');

//function countdown() {
  //  var timeLeft = 300;

    //var timeInterval = setInterval(function() {
      //  if (timeLeft > 1 ) {
        //    timerEl.textContent = timeLeft + ' seconds remaining';
          //  timeLeft--;
        //} else if (timeLeft === 1) {
          //  timerEl.textContent = timeLeft + 'second remaining';
            //timeLeft--;
        //} else {
         //   timerEl.textContent = '';
           // clearInterval(timeInterval);
            //displayMessage();
        //}
//    }, 1000);
//}
//function displayMessage() {
  //  var wordCount = 0;
    //var msgInterval = setInterval(function(){
      //  if (words[wordCount] === undefined) {
        //    clearInterval(msgInterval);
        //} else {
          //  mainEl.textContent = words[wordCount];
            //wordCount++;
        //}
   // }, 300);
//}
//startBtn.onclick = countdown;

//question object array
    //{ Q1: 'Inside which HTML element do we put the js?', a: 'script'},
    //{ Q2: 'What is a var in terms of javascript?', a: 'a name assigned to a literal value or object'},
    //{ Q3: 'read as js statement and solve: consolelog(2.0=="2"== newBoolean(true)=="1")', a: 'true'},
    //{ Q4: 'Explain the keyword this.', a: 'refers to the object that the function is a property of.'},
    //{ Q5: 'HTML, Javascript, or CSS?', a: 'Javascript'}