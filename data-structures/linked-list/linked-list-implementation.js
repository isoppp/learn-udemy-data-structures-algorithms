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

    if (this.head.next === null) {
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      let node = this.head;
      while (true) {
        if (node.next === null) {
          node.next = newNode;
          this.tail = newNode;
          break;
        }
        node = node.next;
      }
    }
  }
}

const myLinkedList = new LinkedList(10);
// console.log(myLinkedList);

myLinkedList.append(5);
// console.log(myLinkedList);

myLinkedList.append(16);
myLinkedList.append(12);
myLinkedList.append(11);
console.log(myLinkedList);
console.log(JSON.stringify(myLinkedList.head, null, 2));
