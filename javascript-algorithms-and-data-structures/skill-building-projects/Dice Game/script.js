const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let round = 1; 
let rolls = 0;

const rollDice = () => {
  diceValuesArr = [];
  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  };
  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
};

const updateStats = () => {
  rollsElement.textContent = rolls;
  roundElement.textContent = round;
};

const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (diceValuesArr) => {
  const counts = diceValuesArr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return counts;
};

const threeOfAKind = () => {
  const counts = getHighestDuplicates(diceValuesArr);
  const hasThreeOfAKind = Object.values(counts).some(count => count >= 3);
  if (hasThreeOfAKind) {
    const sumOfDice = diceValuesArr.reduce((sum, num) => sum + num, 0);
    const scoreForThreeOfAKind = sumOfDice;
    const index = 0;
    updateRadioOption(index, scoreForThreeOfAKind);
  }
};

const fourOfAKind = () => {
  const counts = getHighestDuplicates(diceValuesArr);
  const hasFourOfAKind = Object.values(counts).some(count => count >= 4);
  if (hasFourOfAKind) {
    const sumOfDice = diceValuesArr.reduce((sum, num) => sum + num, 0);
    const scoreForFourOfAKind = sumOfDice;
    const index = 1;
    updateRadioOption(index, scoreForFourOfAKind);
  }
};

rollDiceBtn.addEventListener("click", () => {
  if (rolls === 3) {
    alert("You have made three rolls this round. Please select a score.");
  } else {
    rolls++;
    rollDice();
    updateStats();
    threeOfAKind();
    fourOfAKind();
  }
});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  if (isModalShowing) {
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";
  }
});