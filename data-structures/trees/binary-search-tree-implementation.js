class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let node = this.root;
    while (true) {
      const direction = value > node.value ? 'right' : 'left';
      if (node[direction] === null) {
        node[direction] = newNode;
        break;
      } else {
        node = node[direction];
      }
    }
    return this;
  }

  lookup(value) {
    if (!this.root) return null;

    let node = this.root;
    while (!(node.right === null && node.left === null)) {
      if (node.value === value) return node;

      if (value > node.value) {
        node = node.right;
      } else {
        node = node.left;
      }
    }

    return null;
  }

  remove(value) {
    // TODO implementation
  }

  breadthFirstSearch() {
    // TODO BFS lecture 194
  }
  breadthFirstSearchR() {
    // TODO BFS lecture using recursive 195
  }

  DFSInOrder() {
    // TODO DFS with InOrder (lec.197)
  }
  DFSPreOrder() {
    // TODO DFS with PreOrder (lec.197)
  }
  DFSPostOrder() {
    // TODO DFS with PostOrder (lec.197)
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(4);
console.log(tree.lookup(20));
console.log(tree.lookup(55));
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
