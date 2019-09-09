const testString = 'Hi My name is Andrei';
const expectedResult = 'ierdnA si eman yM iH';

function reverse(input) {
  // check input
  if (!input || input.length < 2 || typeof input !== 'string')
    return 'humm that is not good';

  const backwards = [];
  const length = input.length - 1;

  for (let i = length; i >= 0; i--) {
    backwards.push(input[i]);
  }

  return backwards.join('');
}

function reverse2(input) {
  // check input
  if (!input || input.length < 2 || typeof input !== 'string')
    return 'humm that is not good';

  return input
    .split('')
    .reverse()
    .join('');
}

console.log(reverse(testString));
console.log(reverse(testString) === expectedResult);

console.log(reverse2(testString));
console.log(reverse2(testString) === expectedResult);
