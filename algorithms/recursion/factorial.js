// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(5));

function findFactorialIterative(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(findFactorialIterative(5));
