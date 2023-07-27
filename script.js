function findMissingNumber(numbers) {
    const n = numbers.length + 1; // Total count of numbers, including the missing one
    const totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  
    const sumOfArray = numbers.reduce((sum, num) => sum + num, 0);
    const missingNumber = totalSum - sumOfArray;
  
    return missingNumber;
  }
  const numbersArray = [1, 2, 3, /* ... */, 45]; // An array of 45 numbers with one missing number
  const missingNumber = findMissingNumber(numbersArray);
  
  console.log('Missing Number:', missingNumber);
    
