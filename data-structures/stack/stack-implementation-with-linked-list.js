class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value, null);

    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }

    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
myStack.push('1');
myStack.push('2');
myStack.push('3');
console.log(myStack);
console.log('peak', myStack.peek());
console.log(myStack.pop());
console.log(myStack);
myStack.pop();
myStack.pop();
console.log(myStack);

//Discord
//Udemy
//google
