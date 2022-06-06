# code-quiz

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz

WHEN I click the start button 
THEN a timer starts and I am presented with a question

---------- COMPLETED ----------

WHEN I answer a question
THEN I am presented with another question

---------- COMPLETED ----------

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

---------- PENDING not subtracting when answer is wrong ----------

WHEN all questions are answered or the timer reaches 0
THEN the game is over

---------- PENDING - not stopping game when timer reaches 0 ----------


WHEN the game is over
THEN I can save my initials and score

---------- PENDING - not generating scorecard ----------


Questions Format:

Title: "Question here"

Option 1: "answer 1"
Option 2: "answer 2"
Option 3: "answer 3"
Option 4: "answer 4"

Correct Answer = Option X

as of 01/23/2022

Pending Developments:

- stop quiz when timer reaches 0 and alert user - COMPLETE!

- locally store user name with the score - PENDING!

- Finalize styling on all divs  - PENDING!

- create "promptHighScore" function. creates divs and listed items from local storage  - PENDING!

- block option to click on butons after a selection is made  - PENDING!
.