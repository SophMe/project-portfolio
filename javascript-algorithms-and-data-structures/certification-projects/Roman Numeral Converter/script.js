// Access DOM elements
const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const letterOutput = document.getElementById('output');

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
