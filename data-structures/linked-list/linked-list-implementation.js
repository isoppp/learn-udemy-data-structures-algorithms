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
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
// console.log(myLinkedList);

myLinkedList.append(5);
// console.log(myLinkedList);

myLinkedList.append(16);
myLinkedList.prepend(12);
console.log(JSON.stringify(myLinkedList.head, null, 2));
console.log(JSON.stringify(myLinkedList.tail, null, 2));
