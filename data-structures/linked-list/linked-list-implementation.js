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

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  setNext(value) {
    this.next = value;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1; // optional
  }

  append(value) {
    const newNode = new Node(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(12);
console.log(JSON.stringify(myLinkedList.head, null, 2));
console.log(JSON.stringify(myLinkedList.tail, null, 2));
