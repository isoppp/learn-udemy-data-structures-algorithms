const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const halfLength = Math.floor(array.length / 2);
  const left = array.slice(0, halfLength);
  const right = array.slice(halfLength);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const array = [];
  const length = Math.max(left.length, right.length);
  console.log({ left, right, length });
  let leftCounter = 0;
  let rightCounter = 0;
  while (array.length !== left.length + right.length) {
    let currentLeft = left[leftCounter];
    let currentRight = right[rightCounter];

    if (currentLeft === undefined) {
      array.push(currentRight);
      rightCounter++;
    } else if (currentRight === undefined) {
      array.push(currentLeft);
      leftCounter++;
    } else {
      if (currentLeft < currentRight) {
        array.push(currentLeft);
        leftCounter++;
      } else {
        array.push(currentRight);
        rightCounter++;
      }
    }
  }
  console.log({ array });
  return array;
}

const answer = mergeSort(numbers);
console.log({ numbers, answer });
