//each object will house a question to be prompted on screen. 

var  q1 = 'Commonly used datatypes DO NOT include:';
var q1opts = ['String','Booleans', 'Alerts', 'Numbers'];

var q2 = 'Some text here asking a question to the user';
var q2opts = ['1st Answer', '2nd Answer', '3rd Answer', '4th Answer'];


var q3 = 'Some text here asking a question to the user';
var q3opts = ['1st Answer', '2nd Answer', '3rd Answer', '4th Answer'];


var q4 = 'Some text here asking a question to the user';
var q4opts = ['1st Answer', '2nd Answer', '3rd Answer', '4th Answer'];

// the followign arrays will house all questions and answers

var questionArr = [q1, q2, q3, q4];
var optionsArr = [q1opts, q2opts, q3opts, q4opts];

var createButton = function (value) {
  var optEl = document.createElement("div");
  optEl.className ="row";
  var qButton = document.createElement("button");
  qButton.className = "btn btn-primary btn-lg";
  qButton.type = "button";
  qButton.textContent = value;
  optEl.appendChild(qButton);
  console.log(optEl);
  return optEl;
}

var mainContainer = document.querySelector("#main-container");

// creates a <div> <h3> QuestionArr['i'] </h3> </div>

// for (i = 0; i < questionArr.length; i++) {                     // for to cycle through each question

var qEl = document.createElement("div");  
qEl.className = "row";
qEl.innerHTML = '<h3>' + questionArr[0] + '</h3>';          // <h3> Question Text </h3>
console.log(qEl);
mainContainer.appendChild(qEl);                           // <div><h3></h3></div>
console.log(mainContainer);
 
for (i=0; i < 4; i++){
  var optEl = document.createElement("div");
  optEl.className ="row";
  var qButton = document.createElement("button");
  qButton.className = "btn btn-primary btn-lg";
  qButton.type = "button";
  qButton.textContent = q1opts[i];
  optEl.appendChild(qButton);

  mainContainer.appendChild(optEl);
}


var nextQuestion = function () {
  var clearQuestion = document.getElementById("main-container");
  clearQuestion.innerHTML = '';
  return;
};