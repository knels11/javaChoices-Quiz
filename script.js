console.log("attached");

alert("Are you ready to test your javascript knowledge?")

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
var questions = [
    { Q1: 'Inside which HTML element do we put the js?', a: 'script'},
    { Q2: 'What is a var in terms of javascript?', a: 'a name assigned to a literal value or object'},
    { Q3: 'read as js statement and solve: consolelog(2.0=="2"== newBoolean(true)=="1")', a: 'true'},
    { Q4: 'Explain the keyword this.', a: 'refers to the object that the function is a property of.'},
    { Q5: 'HTML, Javascript, or CSS?', a: 'Javascript'},
];

//start the js quiz with score of 0
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
//alert user if question is right or wrong
  //      alert('correct');
  //  } else {
   //     alert('wrong');
  //  }
//};

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