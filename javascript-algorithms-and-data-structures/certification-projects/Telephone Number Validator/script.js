const numberInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const phoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const validateNumber = (number) => {
  const isValid = phoneNumberRegex.test(number);
  if (number === '') {
    alert('Please provide a phone number');
    return;
  } 
  if (isValid) {
    result.textContent = `Valid US number: ${number}`;
    console.log('Result displayed:', result.textContent);
  } else {
    result.textContent = `Invalid US number: ${number}`;
    console.log('Result displayed:', result.textContent);
  }
};

checkBtn.addEventListener('click', () => {
  const phoneNumber = numberInput.value.trim();
  if (phoneNumber === '') {
    alert('Please provide a phone number');
  } else {
    validateNumber(phoneNumber);
  }
});

clearBtn.addEventListener('click', () => {
  numberInput.value = '';
  result.textContent = '';
});