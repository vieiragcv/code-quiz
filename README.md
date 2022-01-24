# code-quiz

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score


Questions Format:

Title: "Question here"

Option 1: "answer 1"
Option 2: "answer 2"
Option 3: "answer 3"
Option 4: "answer 4"

Correct Answer = Option X

as of 01/23/2022

Pending Developments:

- Fix bug where counter is not showing on top right corner

- Finalize styling on all divs

- locally store user name with the score

- create "promptHighScore" function. creates divs and listed items from local storage

- create alert when timer reaches zero

- block option to click on butons after a selection is made

- number selections

extras:

- create function to randomize answer options positions.