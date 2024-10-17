const getMean = (array) => 
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  
  if (sorted.length % 2 === 0) {
    const mid1 = sorted[sorted.length / 2];
    const mid2 = sorted[(sorted.length / 2) - 1];
    return (mid1 + mid2) / 2;
  } else {
    return sorted[Math.floor(sorted.length / 2)];
  }
};

const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
};