const colorsArr = [
  "#B23A48",
  "#F3CAC3",
  "#F5DEB3",
  "#D36E70",
  "#2E4147",
  "#A78E44",
  "#92A8A3",
  "#F7E2D4",
  "#E56349",
  "#C4A381",
];

function getRandomIndex() {
  const randomIndex = Math.floor(colorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = colorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;

  const btn = document.querySelector("#btn");
  btn.style.color = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;