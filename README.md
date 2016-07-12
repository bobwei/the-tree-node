# The Tree Node

This is a small library to easily create tree node data from [Leetcode](https://leetcode.com/problems/binary-tree-postorder-traversal/)


### Example Usage

```
import { TreeNode } from 'the-tree-node';

const postorderTraversal = function (rootNode) {
  if (!rootNode) {
    return [];
  }
  const stack = [rootNode];
  const output = [];
  while (stack.length) {
    const last = stack.slice(-1)[0];
    if (!last.left && !last.right) {
      output.push(stack.pop().val);
    }
    if (last.right) {
      stack.push(last.right);
      last.right = null;
    }
    if (last.left) {
      stack.push(last.left);
      last.left = null;
    }
  }
  return output;
};

const rootNode = TreeNode.fromBFS([1, null, 2, 3]);
console.log(rootNode.bfs(), rootNode.inOrder(), postorderTraversal(rootNode));
```

Response
```
rootNode.bfs() [ 1, 2, 3 ]
rootNode.inOrder() [ 1, 3, 2 ]
postorderTraversal(rootNode) [ 3, 2, 1 ]

{
  "val": 1,
  "right": {
    "val": 2,
    "right": null,
    "left": {
      "val": 3,
      "right": null,
      "left": null
    }
  },
  "left": null
}
```
