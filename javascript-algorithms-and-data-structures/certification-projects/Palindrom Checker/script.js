function isPalindromChecker(e) {
  e.preventDefault();
  const userInput = document.getElementById('text-input').value;
  console.log(userInput);
}

document.getElementById('check-btn').addEventListener('click', isPalindromChecker);