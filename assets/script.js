//each object will house a question to be prompted on screen. 

var question1 = {
  question: 'Commonly used datatypes DO NOT include:',
  option1: 'String',
  option2: 'Booleans',
  option3: 'Alerts',
  option4: 'Numbers',
  answerId: 3
};

var question2 = {
  question: 'Commonly used datatypes DO NOT include:',
  option1: 'String',
  option2: 'Booleans',
  option3: 'Alerts',
  option4: 'Numbers',
  answerId: 1
};

var question3 = {
  question: 'Commonly used datatypes DO NOT include:',
  option1: 'String',
  option2: 'Booleans',
  option3: 'Alerts',
  option4: 'Numbers',
  answerId: 4
};

var question4 = {
  question: 'Commonly used datatypes DO NOT include:',
  option1: 'String',
  option2: 'Booleans',
  option3: 'Alerts',
  option4: 'Numbers',
  answerId: 2
};

// this array will house all questions prompted at the screen. 

var questionsArr = [question1, question2, question3, question4];
console.log(questionsArr);

// CREATE HTML FOR A QUESTIONS AND ITS ANSWERS



var mainContainer = document.querySelector("#main-container");


  var questEl = document.createElement("div");
  questEl.className = "row";
  questEl.innerHTML = "<h3>" + questionsArr[0].question + "</h3>";

  mainContainer.appendChild(questEl);

    optEl1 = document.createElement("div");
    optEl1.className = "row";

    var questButton1 = document.createElement("button");
    questButton1.className = "btn btn-primary btn-lg";
    questButton1.type = "button";
    questButton1.textContent = questionsArr[0].option1;

    optEl1.appendChild(questButton1);
    mainContainer.appendChild(optEl1);

    optEl2 = document.createElement("div");
    optEl2.className = "row";

    var questButton2 = document.createElement("button");
    questButton2.className = "btn btn-primary btn-lg";
    questButton2.type = "button";
    questButton2.textContent = questionsArr[0].option2;

    optEl2.appendChild(questButton2);
    mainContainer.append(optEl2);

    optEl3 = document.createElement("div");
    optEl3.className = "row";

    var questButton3 = document.createElement("button");
    questButton3.className = "btn btn-primary btn-lg";
    questButton3.type = "button";
    questButton3.textContent = questionsArr[0].option3;

    optEl3.appendChild(questButton3);
    mainContainer.appendChild(optEl3);

    optEl4 = document.createElement("div");
    optEl4.className = "row";

    var questButton4 = document.createElement("button");
    questButton4.className = "btn btn-primary btn-lg";
    questButton4.type = "button";
    questButton4.textContent = questionsArr[0].option4;

    optEl4.appendChild(questButton4);
    mainContainer.appendChild(optEl4);



  

  optEl1.appendChild(questButton1);

  mainContainer.appendChild(opt1E);

  console.log(mainContainer);

 



var nextQuestion = function () {
  var clearQuestion = document.getElementById("main-container");
  clearQuestion.innerHTML = '';
}



/*
var createElements = function() {
    for (i = 0; i < 4; i++) {
    }
  }
*/