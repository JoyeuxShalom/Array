function findMissingNumber(numbers) {
    const n = numbers.length + 1; // Total count of numbers, including the missing one
    const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  
    const sumOfArray = numbers.reduce((sum, num) => sum + parseInt(num), 0);
    const missingNumber = totalSum - sumOfArray;
  
    return missingNumber;
  }
  
  const form = document.getElementById('number-form');
  const resultElement = document.getElementById('result');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputNumbers = document.getElementById('numbers').value;
    const numbersArray = inputNumbers.split(',').map(num => num.trim());
  
    if (!numbersArray.every(num => !isNaN(num))) {
      resultElement.textContent = 'Invalid input! Please enter numbers separated by commas.';
      return;
    }
  
    const missingNumber = findMissingNumber(numbersArray);
  
    resultElement.textContent = `Missing Integer: ${missingNumber}`;
  });
  
