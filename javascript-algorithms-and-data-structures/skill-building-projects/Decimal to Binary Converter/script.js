// Step 1: Access DOM elements
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

// Step 2: Create function to display changes of user action (based on EventListener)
function checkUserInput() {
  console.log(numberInput.value);
};

// Step 3: add EventListener to User action
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
  // console.log(e);
  if (e.key === "Enter") {
    checkUserInput()
  }
});