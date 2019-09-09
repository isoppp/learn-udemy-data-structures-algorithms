//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];
const array4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
const array5 = [2, 5, 1, 4, 2];

function firstRecurringCharacter(input) {
  // TODO check data

  const map = {};

  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    if (map[input[i]]) return input[i];
    map[num] = true;
  }
  return undefined;
}

console.log(firstRecurringCharacter(array1) === 2);
console.log(firstRecurringCharacter(array2) === 1);
console.log(firstRecurringCharacter(array3) === undefined);
console.log(firstRecurringCharacter(array4) === 5);
console.log(firstRecurringCharacter(array5) === 2);
