import { TreeNode } from '../src/';

const start = 0;
const end = 10;
const data = Array.from(new Array(end), (x, i) => i + 1);
console.log('data', data);
const rootNode = data
  .reduce(
    (prev, current) => prev.insert(current),
    new TreeNode(start)
  );
console.log('rootNode.bfs()', rootNode.bfs());
console.log('rootNode.inOrder()', rootNode.inOrder());
console.log(JSON.stringify(rootNode, null, 2));
