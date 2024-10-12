// Variable Declarations and DOM Selections
const sortButton = document.getElementById('sort');

// Event listener
sortButton.addEventListener('click', sortInputArray);

// Main function
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName('values-dropdown')
  ].map((dropdown) => Number(dropdown.value));
  console.log('Input Values:', inputValues);
  updateUI(inputValues);
};

// Helper function
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};
