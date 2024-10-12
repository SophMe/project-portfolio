// Variable Declarations and DOM Selections
const sortButton = document.getElementById('sort');

// Main function
const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName('values-dropdown')
  ].map((dropdown) => Number(dropdown.value));
  // console.log('Input Values:', inputValues);
  const sortedValues = bubbleSort(inputValues);                // choose sorting function
  updateUI(sortedValues);
};

// Event listener
sortButton.addEventListener('click', sortInputArray);

// Helper functions
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // console.log(array, array[j], array[j+1]);
      if (array[j] > array[j+1]) {
        const temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      // console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i]= array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}