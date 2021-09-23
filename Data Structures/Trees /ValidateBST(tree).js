/* Validate Binary Search Tree
LeetCode Medium

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

// O(n) T || O(n) S
var recursiveIsValidBST = function(root, lower = -Infinity, upper = Infinity) {
  if (root.val <= lower || root.val >= upper) return false;
  let left = true;
  let right = true;
  
  if (root.left) left = recursiveIsValidBST(root.left, lower, root.val);
  if (root.right) right = recursiveIsValidBST(root.right, root.val, upper);
  
  return left && right
}

// O(n) T || O(1) S
var iterativeIsValidBST = function(root, lower = -Infinity, upper = Infinity){
  if (root == null) return true;
  let stack = [[root, lower, upper]]
  
  while (stack.length){
    [root, lower, upper] = stack.pop();
    if (root == null) continue;
    if (root.val <= lower || root.val >= upper) return false;
    stack.push([root.right, root.val, upper])
    stack.push([root.left, lower, root.val])
  }
  
  return true;
}
