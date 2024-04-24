'use strict';
const player1totalScoreEl = document.querySelector('#score--0');
const player2totalScoreEl = document.querySelector('#score--1');
const diceImageEl = document.querySelector('.dice');
const rollDiceBtnEl = document.querySelector('.btn--roll');
const player1CurrentScoreEl = document.querySelector('#current--0');
const player2CurrentScoreEl = document.querySelector('#current--1');
const player1Board = document.querySelector('.player--0');
const player2Board = document.querySelector('.player--1');
const holdBtnEl = document.querySelector('.btn--hold');
const newBtnEl = document.querySelector('.btn--new');
/*const playerGamescore = function (gamescore) {
  document.getElementById(`current--${activePlayer}`).textContent = gamescore;
};
const displayGameScore = function (score) {
  scoreEl.textContent = score;
};*/
let activePlayer = 0;
let diceCurrentGameScore = 0;
let totalScore = [0, 0];
let playing = true;
player1totalScoreEl.textContent = 0;
player2totalScoreEl.textContent = 0;
diceImageEl.style.display = 'none';
//implementing the rolling of dice
rollDiceBtnEl.addEventListener('click', function () {
  if (playing) {
    let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
    diceImageEl.style.display = 'block';
    diceImageEl.src = `dice-${randomDiceNumber}.png`; //template litra to evaluate the random number
    if (randomDiceNumber !== 1) {
      diceCurrentGameScore += randomDiceNumber; //augmented assignment operator += diceCurrentGameScore+ randomeDiceNumber
      document.getElementById(`current--${activePlayer}`).textContent =
        diceCurrentGameScore;
    } else {
      diceCurrentGameScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player1Board.classList.toggle('player--active');
      player2Board.classList.toggle('player--active');
    }
  }
});
holdBtnEl.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += diceCurrentGameScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    diceCurrentGameScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    if (totalScore[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceImageEl.style.display = 'none';
      diceCurrentGameScore = 0;
      playing = false;
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      player1Board.classList.toggle('player--active');
      player2Board.classList.toggle('player--active');
    }
  }
});
newBtnEl.addEventListener('click', function () {
  playing = true;
  diceImageEl.style.display = 'none';
  diceCurrentGameScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = 0;
  totalScore = [0, 0];
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  player1Board.classList.remove('player--winner');
  player2Board.classList.remove('player--winner');
  //const player1Board = document.querySelector('.player--0');
  //activePlayer = activePlayer === 0 ? 1 : 0;
  player1Board.classList.add('player--active');
  player2Board.classList.remove('player--active');
});
console.log(player1Board.classList);
