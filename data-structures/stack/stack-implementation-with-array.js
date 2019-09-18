class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  isEmpty() {
    return this.data.length === 0;
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
