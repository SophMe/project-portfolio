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

  const showResult = document.getElementById('result');
  if (isPalindrome) {
    showResult.textContent = `"${userInput}" is a palindrome.`
  } else {
    showResult.textContent = `"${userInput}" is not a palindrome.`
  }

  document.getElementById('text-input').value = '';
  // console.log("Input Value:", userInput);
};

function cleanInputString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
};

document.getElementById('check-btn').addEventListener('click', isPalindromChecker);