/* All Nodes Distance K in Binary Tree
LeetCode Medium
Facebook, Amazon, Microsoft, VMWare, Nutanix

Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

You can return the answer in any order.

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
Output: [7,4,1]
Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

Example 2:

Input: root = [1], target = 1, k = 3
Output: []

*/

// O(n) T | O(n) S - create parent pointers, then do a BFS in all directions from target node
var distanceK = function(root, target, k) {
  assignParentPointers(root, target, null);
  let queue = [[target, 0, ""]];
  let result = [];
  
  while (queue.length > 0){
    let [node, distance, direction] = queue.shift();
    if (distance === k) {
      result.push(node.val);
      continue;
    } 
    if (distance > k) break;
    if (direction !== 'left' && node.left !== null) queue.push([node.left, distance + 1, 'parent']);
    if (direction !== 'right' && node.right !== null) queue.push([node.right, distance + 1, 'parent']);
    if (direction !== 'parent' && node.parent !== null){
      if (node.parent.left === node){
        queue.push([node.parent, distance + 1, 'left']);
      } else {
        queue.push([node.parent, distance + 1, 'right']);
      }
    }
  }
  
  return result;
};

var assignParentPointers = function(root, target, parent){
  root.parent = parent;
  if (root.left) assignParentPointers(root.left, target, root)
  if (root.right) assignParentPointers(root.right, target, root)
}
