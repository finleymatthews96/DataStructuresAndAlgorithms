/* Binary Tree Zigzag Level Order Traversal
LeetCode Medium

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Exaple 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

*/

// BFS
// O(n) T || O(n) S where n is # of nodes in tree
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let left = false;
  let processed = [root];
  let current = [];
  
  while (processed.length > 0){
    for (let i = processed.length - 1; i >= 0; i--){
      if (left && processed[i].left) current.push(processed[i].left)
      if (processed[i].right) current.push(processed[i].right)
      if (!left && processed[i].left) current.push(processed[i].left)
    }
    processed = processed.map((node) => node.val)
    result.push(processed);
    processed = current
    current = []
    left = !left;
  }
  
  return result;
};
