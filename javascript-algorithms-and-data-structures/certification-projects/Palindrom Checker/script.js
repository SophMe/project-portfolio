function isPalindromChecker(e) {
  e.preventDefault();
  const userInput = document.getElementById('text-input').value;
  
  if (!userInput) {
    alert("Please input a value");
    return;
  }

  const cleanedInput = cleanInputString(userInput);
  const reversedInput = cleanedInput.split('').reverse().join('');
  const isPalindrome = cleanedInput === reversedInput;


  console.log("Input Value:", userInput);
};

function cleanInputString(str) {
  return str.toLowerCase().replace(/[^a-z]/g, '');
};

document.getElementById('check-btn').addEventListener('click', isPalindromChecker);