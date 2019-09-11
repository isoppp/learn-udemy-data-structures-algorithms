// let linkedListStructureExample = {
//   head: {
//     value: 10, // any data type
//     next: { // next node pointer
//       value: 5,
//       next: {
//         value: 16,
//         next: null // this is tail
//       }
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1; // optional
  }
  append(value) {
    // TODO next
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
console.log(myLinkedList);
