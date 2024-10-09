// Step 1: Access DOM elements
const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');

// Step 2: Create function to display changes of user action (based on EventListener)
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  showAnimation(inputInt);
  numberInput.value = '';
};

// Step 3: Add EventListener to User action
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

// Step 4: Create function for the conversion
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Step 5: Dynamically generate animationData based on user input
const generateAnimationData = (input) => {
  const steps = [];
  let currentValue = input;
  let delay = 0;

  while (currentValue > 1) {
    steps.push({
      inputVal: currentValue,
      msg: `decimalToBinary(${currentValue}) returns '${Math.floor(currentValue / 2)}' + ${currentValue % 2} (${currentValue} % 2)`,
      addElDelay: delay,
      showMsgDelay: delay + 5000,
      removeElDelay: delay + 10000,
    });
    currentValue = Math.floor(currentValue / 2);
    delay += 2000;
  }

  // Add the base case
  steps.push({
    inputVal: currentValue,
    msg: `decimalToBinary(${currentValue}) returns '${currentValue}' (base case)`,
    addElDelay: delay,
    showMsgDelay: delay + 5000,
    removeElDelay: delay + 10000,
  });

  return steps;
};

// Step 6: Set up animation functionality
const showAnimation = (inputInt) => {
  result.textContent = decimalToBinary(inputInt);
  animationContainer.innerHTML = '';
  const animationData = generateAnimationData(inputInt);

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="anim-${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(`anim-${obj.inputVal}`).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(`anim-${obj.inputVal}`).remove();
    }, obj.removeElDelay);
  });
};