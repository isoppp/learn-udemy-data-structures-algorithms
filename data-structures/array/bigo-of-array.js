/**
 * Basics
 *
 * Lookup - O(1)
 * Push - O(1)
 * Insert - O(n)
 * Delete - O(n)
 **/

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 byte of strage *32bit system

strings[2]; // Lookup - O(1)
strings.push('e'); // Push - O(1)
strings.pop(); // O(1)
strings.unshift('x'); // O(n) - Relates to index of array
strings.splice(2, 1, 'alian'); // O(n) (n = array.length - start of arguments)

console.log(strings);
