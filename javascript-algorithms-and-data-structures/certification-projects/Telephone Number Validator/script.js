const numberInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

checkBtn.addEventListener('click', () => {
  if (numberInput.value === '') {
    alert('Please provide a phone number');
  }
  return;
});

clearBtn.addEventListener('click', () => {
  numberInput.value = '';
  result.textContent = '';
});