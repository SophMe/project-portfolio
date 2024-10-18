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

const getMode = (array) => {
  const counts = {};
  // array.forEach(el => counts[el] = (counts[el] || 0) + 1)
  array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
  return mode.join(', ');
};

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
};

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) /array.length;
  return variance;
};

const calculate = () => {
  const value = document.querySelector('#numbers').value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
  document.querySelector('#mode').textContent = mode;
  document.querySelector('#range').textContent = range;
  document.querySelector('#variance').textContent = variance;
};