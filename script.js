'use strict';
// define secret number once we start application! to the secret number we will compare all the guesses. secretNumber - is state variable.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// variable score keeps data in our code! which is good! we don't need to rely on the DOM to keep our data. it is STATE VARIABLE- because it is relavant to the application.
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no number provided
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Provide a number';

    // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🌟 Correct number!';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    highScore < score ? (highScore = score) : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔️ Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥  You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⛔️ Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
