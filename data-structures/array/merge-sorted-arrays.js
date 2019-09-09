// question
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30);
// result -> [0, 3, 4, 4, 6, 30, 31];

const test1 = {
  arr1: [0, 3, 4, 31],
  arr2: [4, 6, 30],
  expectedResult: [0, 3, 4, 4, 6, 30, 31],
};

const test2 = {
  arr1: [0, 3, 4, 31],
  arr2: [4, 6, 30, 33, 34],
  expectedResult: [0, 3, 4, 4, 6, 30, 31, 33, 34],
};

function mergeSortedArrays(array1, array2) {
  // Check input
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const mergedArray = [];
  let array1Item = array1[0]; // 0
  let array1Index = 0;
  let array2Item = array2[0]; // 4
  let array2Index = 0;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Index++;
      array1Item = array1[array1Index];
    } else {
      mergedArray.push(array2Item);
      array2Index++;
      array2Item = array2[array2Index];
    }
  }

  console.log(mergedArray);
  return mergedArray;
}

console.log(
  mergeSortedArrays(test1.arr1, test1.arr2).join('') ===
    test1.expectedResult.join(''),
);
console.log(
  mergeSortedArrays(test2.arr1, test2.arr2).join('') ===
    test2.expectedResult.join(''),
);
