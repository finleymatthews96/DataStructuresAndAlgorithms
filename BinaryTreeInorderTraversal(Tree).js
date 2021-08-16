/* Binary Tree Inorder Traversal
Leetcode Medium

Given the root of a binary tree, return the inorder traversal of its nodes' values.
Input: root = [1,null,2,3]
Output: [1,3,2]
*/

// Recursive solution, O(n) T || O(n) S
var recursiveInorderTraversal = function(root, result = []) {
  if (root && root.left) inorderTraversal(root.left, result)
  if (root) result.push(root.val)
  if (root && root.right) inorderTraversal(root.right, result)
  return result
};

// Iterative solution, O(n) T || O(n) S
var iterativeInorderTraversal = function(root){
  let curr = root
  let res = [] 
  let stack = [];
  
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}
