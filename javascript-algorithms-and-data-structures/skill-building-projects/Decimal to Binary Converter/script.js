// Step 1: Access DOM elements
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

// Step 2: Create function to display changes of user action (based on EventListener)
function checkUserInput() {
  // console.log(numberInput.value);
  if (!numberInput.value || isNaN(parseInt(numberInput.value)) || parseInt(numberInput.value) < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }
  result.textContent = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = '';
};

// Step 3: Add EventListener to User action
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    checkUserInput()
  }
});

// Step 4: Create function for the conversion
function decimalToBinary (input) {
  if (input === 0 || input === 1) {
    return String(input)
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
}