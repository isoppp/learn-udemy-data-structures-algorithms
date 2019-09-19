const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(N^2)
function selectionSort(array) {
  for (let j = 0; j < array.length; j++) {
    let current = array[j];
    let swapTargetIndex = j;

    for (let i = j + 1; i < array.length; i++) {
      const num = array[i];
      if (num < current) {
        swapTargetIndex = i;
      }
    }

    if (swapTargetIndex !== j) {
      array[j] = array[swapTargetIndex];
      array[swapTargetIndex] = current;
    }
  }
}

selectionSort(numbers);
console.log(numbers);
