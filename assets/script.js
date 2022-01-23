/* -------------------------------------------------------------
-                   GLOBAL VARIABLES                           
-------------------------------------------------------------*/

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
var questionCount = 1;

var questionArr = [q1, q2, q3, q4, q5];
var optionsArr = [q1opts, q2opts, q3opts, q4opts, q5opts];

var mainContainer = document.querySelector("#main-container");
var footerContainer = document.querySelector("#footer");

/*----------------------------------------------------------------------
-                       ANSWER VALIDATION
----------------------------------------------------------------------*/

var checkAnswer = function (event) {          // Working only for first question
  var targetEl = event.target;
  var parentQuestion = document.querySelector('[id^="q-"]').id;
  var numOnly = parentQuestion.replace( /^\D+/g, '');

  if (targetEl.id === correctAnswers[numOnly]) {
    var footerEl = createResultFooter('Correct!');  
    footerContainer.appendChild(footerEl);
    correctCount++;
  }
  else {  
    var footerEl = createResultFooter('Wrong');
    footerContainer.appendChild(footerEl);
  }
  setTimeout(nextQuestion, 1500);
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
  if(questionCount < 5) {
    var clearQuestion = document.getElementById("main-container");
    clearQuestion.innerHTML = '';
    var clearFooter = document.getElementById("footer");
    clearFooter.innerHTML = '';
    promptQuestion(questionCount);
    questionCount++;
    return;
  }
  else {
    var userScore = (correctCount / 5) * 100;
    window.alert('Your Score is:' + userScore); //This needs to point to the results screens
  }
};

var createResultFooter = function (value) {
  var footerEl = document.createElement("div");
  footerEl.className = "row";
  footerEl.innerHTML = "<h3>" + value + "</h3>";
  return footerEl;
}


/*------------------------------------------------------------------------
-                         MAIN FUNCTION
-------------------------------------------------------------------------*/

var promptQuestion = function (value) {

  var qEl = document.createElement("div");
  qEl.className = "row";
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

promptQuestion(0);

