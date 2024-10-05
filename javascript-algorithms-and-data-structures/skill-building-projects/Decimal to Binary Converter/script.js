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
  decimalToBinary(parseInt(numberInput.value));
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
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }

  while ( input > 0 ) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }
  // console.log("Inputs: ", inputs);
  // console.log("Quotients: ", quotients);
  // console.log("Remainders: ", remainders);
  const binaryResult = remainders.reverse().join("");
  result.innerText = binaryResult;
}