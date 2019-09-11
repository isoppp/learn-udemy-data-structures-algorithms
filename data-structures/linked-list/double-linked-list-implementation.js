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
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
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
    const newNode = new Node(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value, this.head, null);
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length - 1) {
      // should throw error
      return this.append(value);
    } else if (index <= 0) {
      // should throw error
      return this.prepend(value);
    }

    const prevTarget = this.getNodeByIndex(index - 1);
    const nextTarget = prevTarget.next;
    const newNode = new Node(value, nextTarget, prevTarget);
    nextTarget.prev = newNode;
    prevTarget.next = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    const modifiedIndex = Math.min(Math.max(index, 0), this.length - 1);

    if (modifiedIndex === 0) {
      this.head.next.prev = null;
      this.head = this.head.next;
    } else if (modifiedIndex === this.length - 1) {
      this.tail = this.getNodeByIndex(modifiedIndex - 1);
      this.tail.next = null;
    } else {
      const prevTarget = this.getNodeByIndex(modifiedIndex - 1);
      const nextTarget = prevTarget.next;
      const target = prevTarget.next;
      nextTarget.prev = prevTarget;
      prevTarget.next = nextTarget;
    }

    this.length--;
    return this;
  }

  getNodeByIndexFromHead(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      if (node.next === null) break;
      node = node.next;
    }
    return node;
  }
  getNodeByIndexFromTail(index) {
    let node = this.tail;
    for (let i = this.length - 1; i >= index; i--) {
      if (node.prev === null) break;
      node = node.prev;
    }
    return node;
  }

  getNodeByIndex(index) {
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

    const shouldSearchFromHead = index <= Math.floor(this.length / 2);
    return shouldSearchFromHead
      ? this.getNodeByIndexFromHead(index)
      : this.getNodeByIndexFromTail(index);
  }
}

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(12);
myLinkedList.insert(2, 99);
myLinkedList.insert(-5, 80);
myLinkedList.remove(-1);
myLinkedList.remove(10);
myLinkedList.remove(2);
console.dir(myLinkedList, { depth: null });
console.log(myLinkedList.getArray());
