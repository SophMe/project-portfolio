const getMean = (array) => 
  array.reduce((acc, el) => acc + el, 0) / array.length;

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(element => Number(element)).filter(element => !isNaN(element));
}