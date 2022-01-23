/* -------------------------------------------------------------
-                   GLOBAL VARIABLES                           
-------------------------------------------------------------*/

var  q1 = 'Commonly used datatypes DO NOT include:';
var q1opts = ['String','Booleans', 'Alerts', 'Numbers'];

var q2 = 'Question Number 2 Prompted';
var q2opts = ['Q2 A1', 'Q2 A2', 'Q2 A3', 'Q2 A4'];

var q3 = 'Question Number 3 Prompted';
var q3opts = ['Q3 A1', 'Q3 A2', 'Q3 A3', 'Q3 A4'];

var q4 = 'Question Number 4 Prompted';
var q4opts = ['Q4 A1', 'Q4 A2', 'Q4 A3', 'Q4 A4'];

var correctAnswers = ['btn-0','btn-3','btn-2','btn-1']

var correctCount = 0;
var questionCount = 1;

var questionArr = [q1, q2, q3, q4];
var optionsArr = [q1opts, q2opts, q3opts, q4opts];

var mainContainer = document.querySelector("#main-container");
var footerContainer = document.querySelector("#footer");

/*----------------------------------------------------------------------
-                       ANSWER VALIDATION
----------------------------------------------------------------------*/

var checkAnswer = function (event) {          // Working only for first question
  var targetEl = event.target;
  if (targetEl.id === correctAnswers[0]) {
    var footerEl = createResultFooter('Correct!');  
    footerContainer.appendChild(footerEl);
    correctCount++;
  }
  else {  
    var footerEl = createResultFooter('Wrong');
    footerContainer.appendChild(footerEl);
  }
  footerEl.addEventListener('click',nextQuestion); // TEMPORARY - need to click on footer to load next question. should be a timed event (2 second delay)
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
  var clearQuestion = document.getElementById("main-container");
  clearQuestion.innerHTML = '';
  var clearFooter = document.getElementById("footer");
  clearFooter.innerHTML = '';
  promptQuestion(questionCount);
  questionCount++;
  return;
};

var createResultFooter = function (value) {
  var footerEl = document.createElement("div");
  footerEl.className = "row";
  footerEl.innerHTML = "<h3>" + value + "</h3>";
  return footerEl;
}
// creates a <div> <h3> QuestionArr['i'] </h3> </div>

/*------------------------------------------------------------------------
-                         MAIN FUNCTION
-------------------------------------------------------------------------*/

var promptQuestion = function (value) {

  var qEl = document.createElement("div");
  qEl.className = "row";
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