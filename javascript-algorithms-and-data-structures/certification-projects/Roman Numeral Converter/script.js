// Access DOM elements
const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const letterOutput = document.getElementById('output');

// Check input
const checkInput = () => {
  console.log(numberInput.value);
}

// EventListener for user action
convertButton.addEventListener('click', checkInput);
numberInput.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.key === 'Enter') {
    checkInput();
  }
});
