/* -------------------------------------------------------------
-                   GLOBAL VARIABLES                           
--------------------------------------------------------------*/

var  q1 = 'Commonly used datatypes DO NOT include:';
var q1opts = ['String','Booleans', 'Alerts', 'Numbers'];

var q2 = 'The condition in and if / else statement is enclosed with ___';
var q2opts = ['quotes', 'curly brackets', 'parenthesis', 'square brackets'];

var q3 = 'Arrays in JavaScript can be used to store ___.';
var q3opts = ['numbers and strings', 'other arrays', 'booleans', 'all of the above'];

var q4 = 'A very useful tool used during development and debugging for printing content to the debugger is:';
var q4opts = ['JavaScript', 'terminal/bash', 'for loops', 'console.log'];

var q5 = 'String values must be enclosed within ___ when being assigned to variables.';
var q5opts = ['commas', 'curly brackets', 'quotes', 'parenthesis'];

var correctAnswers = ['btn-0','btn-2','btn-3','btn-3','btn-2'];

var correctCount = 0;
var questionCount = 0;

var userScore = 0;

var questionArr = [q1, q2, q3, q4, q5];
var optionsArr = [q1opts, q2opts, q3opts, q4opts, q5opts];

var mainContainer = document.querySelector("#main-container");
var footerContainer = document.querySelector("#footer");

var scoresObj = [];

/*------------------------------------------------------------------------
-                           TIMER (index.html - only)
-------------------------------------------------------------------------*/

var currentTime = 100;
var timeLeft = document.querySelector('#time-left');
var TimerEl = document.createElement("div");

TimerEl.type = "div";
TimerEl.id = 'timer';
TimerEl.className = 'correct-answer';
TimerEl.innerHTML = currentTime;

if (currentTime > 0) {
  timeLeft.appendChild(TimerEl);
}

else {
  stopCountDown();
}

function countDown() {
  
    currentTime--;
    TimerEl.innerHTML = currentTime;
    TimerEl.className = 'wrong-answer';
    timeLeft.appendChild(TimerEl);
    if (currentTime === 0 ) {
      nextQuestion();
      alert('You are out of time!');  
      stopCountDown();
    }
}

function startCountDown() {
  intervalID = setInterval(countDown, 1000);
}

function stopCountDown() {
  clearInterval(intervalID);
}

/*----------------------------------------------------------------------
-                       ANSWER VALIDATION
----------------------------------------------------------------------*/

var checkAnswer = function (event) {   
  var targetEl = event.target;
  var parentQuestion = document.querySelector('[id^="q-"]').id;
  var numOnly = parentQuestion.replace( /^\D+/g, '');

  if (targetEl.id === correctAnswers[numOnly]) {
    var footerEl = createResultFooter('Correct!');
    footerEl.className = 'correct-answer'; 
    footerContainer.appendChild(footerEl);
    correctCount++;
  }
  else {  
    var footerEl = createResultFooter('Wrong - 10 Seconds deducted');
    footerEl.className = 'wrong-answer'; 
    currentTime = currentTime - 10;
    footerContainer.appendChild(footerEl);
  }
  setTimeout(nextQuestion, 1000);
}

var createResultFooter = function (value) {
  var footerEl = document.createElement("div");
  footerEl.className = "row";
  footerEl.innerHTML = "<h3>" + value + "</h3>";
  return footerEl;
}

/*----------------------------------------------------------------------
-                             SUPPORT FUNCTIONS     
---------------------------------------------------------------------*/

var createButton = function (value) {
  var optEl = document.createElement("div");
  optEl.className ="row";
  var qButton = document.createElement("button");
  qButton.className = "btn btn-primary btn-lg";
  qButton.type = "button";
  qButton.textContent = value;
  optEl.appendChild(qButton);
  return optEl;
}

var nextQuestion = function () {
  if(questionCount < 5 && currentTime > 0) {

    var clearQuestion = document.getElementById("main-container");
    clearQuestion.innerHTML = '';

    var clearFooter = document.getElementById("footer");
    clearFooter.innerHTML = '';
    
    promptQuestion(questionCount);
    questionCount++;
    return;
  }
  else {
    userScore = (correctCount / 5) * 100;
    var clearQuestion = document.getElementById("main-container");
    clearQuestion.innerHTML = '';
    var clearFooter = document.getElementById("footer");
    clearFooter.innerHTML = '';
    promptResult(userScore);
  }
};

/*------------------------------------------------------------------------
-                        PROMPT TO SCREEN - FUNCTIONS
-------------------------------------------------------------------------*/

var promptQuestion = function (value) {

  var qEl = document.createElement("div");
  qEl.className = "row m-3 p-3";
  qEl.id = 'q-' + value;
  qEl.innerHTML = '<h3>' + questionArr[value] + '</h3>';          // <h3> Question Text </h3>
  mainContainer.appendChild(qEl);                           // <div><h3></h3></div>
  
  for (i=0; i < 4; i++){                                  // adds all 4 buttons to screen
    var optEl = document.createElement("div");
    optEl.className ="row";
    var qButton = document.createElement("button");
    qButton.className = "btn btn-primary btn-lg";
    qButton.type = "button";
    qButton.id = 'btn-'+i;
    qButton.textContent = optionsArr[value][i];
    optEl.appendChild(qButton);
    mainContainer.appendChild(optEl);
  }

  var option1 = document.querySelector("#btn-0");
  var option2 = document.querySelector("#btn-1");
  var option3 = document.querySelector("#btn-2");
  var option4 = document.querySelector("#btn-3");

  option1.addEventListener('click', checkAnswer);
  option2.addEventListener('click', checkAnswer);
  option3.addEventListener('click', checkAnswer);
  option4.addEventListener('click', checkAnswer);

}

var promptResult = function (value) {
  var qEl = document.createElement("div");
  qEl.className = "row";
  qEl.id = "enter-initials";
  qEl.innerHTML = '<h3>Nicely Done!</h3> <h3>Your Scored:  ' + value + '</h3>';
  mainContainer.appendChild(qEl);
  var formEl = document.createElement("form");
  formEl.className = '';
  formEl.id = 'submit-scoreboard';
  var labelEl = document.createElement("label");
  labelEl.for = 'user-initials';
  labelEl.textContent = 'Enter Your Initials:   ';
  labelEl.className = 'form-label';
  formEl.appendChild(labelEl);
  var inputEl = document.createElement("input");
  inputEl.type = 'text';
  inputEl.id = 'user-initials';
  inputEl.placeholder = 'Input your initials: ';
  inputEl.className = 'form-input';
  formEl.appendChild(inputEl);
  var qButton = document.createElement("button");
  qButton.className = "btn btn-primary btn-sm";
  qButton.type = "submit";
  qButton.textContent = "Submit High Score";
  qButton.id = 'high-score-submit';
  formEl.appendChild(qButton);
  mainContainer.appendChild(formEl);
  qButton.addEventListener('click', submitHighScore);
 }

var promptStart = function () {

  var qEl = document.createElement("div");
  qEl.className = "row";
  qEl.id = 'start-page';
  qEl.innerHTML = '<h2> Coding Quiz Challenge </h2> <p> Try to answer the following code-related questions within the time limit. Keep in mind that incorrect anwswers will penalize your score/time by ten seconds! </p>';

  var qButton = document.createElement("button");
  qButton.className = "btn btn-primary btn-sm";
  qButton.type = "button";
  qButton.id = "startBtn";
  qButton.textContent = 'Start Quiz';
  
  qEl.appendChild(qButton);
  mainContainer.appendChild(qEl);

  var startQuiz = document.querySelector("#startBtn");
  startQuiz.addEventListener('click', nextQuestion);
  startQuiz.addEventListener('click', startCountDown);

}

/*------------------------------------------------------------------------
-                    HIGH SCORES STORAGE & SUBMITTAL
-------------------------------------------------------------------------*/

var loadScores = function () {
  if (localStorage.length === 0) {
    return 0;
  }
  else {
    localData = localStorage.getItem('scores');
    localData = JSON.parse(localData);
    return localData;
  }
}

var submitHighScore = function() {

  var input = document.querySelector(`#user-initials`);
  var initials = input.value;
  data = { userScore, initials };

  var currentRecords = loadScores();
  var counter = currentRecords.length;

  if (localStorage.length === 0 ) {
    scoresObj[0] = data;
    localStorage.setItem('scores', JSON.stringify(scoresObj));
    return;
  }
  else {
    currentRecords[counter] = data;
    localStorage.setItem('scores', JSON.stringify(currentRecords));
    return;
  }
}

/*---------------------------------------------------------------------*/

promptStart(); loadScores();











