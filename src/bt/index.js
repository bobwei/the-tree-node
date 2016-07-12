export default class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  insert(val) {
    const queue = [this];
    while (queue.length) {
      const node = queue.shift();
      if (!node.left) {
        node.left = new TreeNode(val);
        break;
      } else if (!node.right) {
        node.right = new TreeNode(val);
        break;
      } else {
        if (node.left.val !== null) {
          queue.push(node.left);
        }
        if (node.right.val !== null) {
          queue.push(node.right);
        }
      }
    }
    return this;
  }

  _removeNullNode() {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      if (current.left && current.left.val === null) {
        current.left = null;
      }
      if (current.right && current.right.val === null) {
        current.right = null;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return this;
  }

  static fromBFS(arr) {
    const rootNode = new TreeNode(arr.shift());
    return arr
      .reduce(
        (prev, current) => prev.insert(current),
        rootNode
      )
      ._removeNullNode();
  }

  bfs() {
    const queue = [this];
    const output = [];
    while (queue.length) {
      const node = queue.shift();
      output.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return output;
  }

  inOrder() {
    const stack = [];
    const output = [];
    let current = this;
    while (current || stack.length) {
      if (current) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        output.push(current.val);
        current = current.right;
      }
    }
    return output;
  }
}
