const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      const current = numbers[i];
      const next = numbers[i + 1];
      console.log(current, next);

      if (current > next) {
        array[i] = next;
        array[i + 1] = current;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
