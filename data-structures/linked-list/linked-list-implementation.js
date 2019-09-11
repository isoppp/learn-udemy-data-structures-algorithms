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

  getArray() {
    const result = [];
    let node = this.head;
    while (node !== null) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  append(value) {
    const newNode = new Node(value, null);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      // should throw error
      return this.append(value);
    } else if (index <= 0) {
      // should throw error
      return this.prepend(value);
    }

    const prevTarget = this.traverseToIndex(index - 1);
    prevTarget.next = new Node(value, prevTarget.next);

    this.length++;
    return this;
  }

  remove(index) {
    const modifiedIndex = Math.min(Math.max(index, 0), this.length - 1);

    if (modifiedIndex === 0) {
      this.head = this.head.next;
    } else if (modifiedIndex === this.length - 1) {
      this.tail = this.traverseToIndex(modifiedIndex - 1);
      this.tail.next = null;
    } else {
      const prevTarget = this.traverseToIndex(modifiedIndex - 1);
      const target = prevTarget.next;
      prevTarget.next = target.next;
    }

    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node.next === null) break;
      node = node.next;
    }
    return node;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(12);
console.log(myLinkedList.getArray());

myLinkedList.insert(2, 99);
console.log(myLinkedList.getArray());
myLinkedList.insert(-5, 80);
console.log(myLinkedList.getArray());

myLinkedList.remove(-1);
console.log(myLinkedList.getArray());
myLinkedList.remove(10);
console.log(myLinkedList.getArray());
myLinkedList.remove(3);
console.log(myLinkedList.getArray());

console.log('tail', JSON.stringify(myLinkedList.tail, null, 2));
