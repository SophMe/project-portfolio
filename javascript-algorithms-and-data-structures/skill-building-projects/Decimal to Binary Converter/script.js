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
};

// Step 3: add EventListener to User action
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    checkUserInput()
  }
});