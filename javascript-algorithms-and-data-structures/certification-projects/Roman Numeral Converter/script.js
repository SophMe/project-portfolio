// Access DOM elements
const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const letterOutput = document.getElementById('output');

// Convert numbers to roman letters
const arabicToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let output = '';
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      output += numeral;
      num -= value;
    }
  };
  // console.log(output);
  return output;
};

// Check input
const checkInput = () => {
  // console.log(numberInput.value);
  const userInput = numberInput.value;
  if (!numberInput.value) {
    letterOutput.textContent = 'Please enter a valid number';
    return;
  } 
  const num = parseInt(userInput);
  if (num < 1) {
    letterOutput.textContent = 'Please enter a number greater than or equal to 1'
    return;
  }
  if (num >= 4000) {
    letterOutput.textContent = 'Please enter a number less than or equal to 3999'
    return;
  }
  letterOutput.textContent = arabicToRoman(num);
};

// EventListener for user action
convertButton.addEventListener('click', checkInput);
numberInput.addEventListener('keydown', (e) => {
  // console.log(e);
  if (e.key === 'Enter') {
    checkInput();
  }
});
