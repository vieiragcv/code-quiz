var loadScores = function () {
  if (localStorage.length === 0) {
    return 0;
  }
  else {
    localData = localStorage.getItem('scores');
    localData = JSON.parse(localData);
    console.log(localData);
    for (i = 0; i < localData.length; i++) {
      console.log(localData[i]);
    }
    return localData;
  }
}

var listEl = document.querySelector('#score-list');
console.log(listEl);

var scores = loadScores();
console.log(scores[0].initials);
console.log(scores[0].userScore);

for ( i = 0; i < scores.length; i++ ) {
  var scoreItem = document.createElement('div');
  scoreItem.className = 'card'
  scoreItem.innerHTML = `<h3>  ${scores[i].initials} scored ${scores[i].userScore} points </h3>  `;
  listEl.appendChild(scoreItem);
  }



