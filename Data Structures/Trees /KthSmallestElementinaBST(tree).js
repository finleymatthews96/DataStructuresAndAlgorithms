/* Kth Smallest Element in a BST
LeetCode Medium
Amazon, Facebook, eBay, Citadel

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:

Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

*/

// O(n) T | O(n) S
var kthSmallest = function(root, k) {
  let obj = {}
  obj.k = k
  obj.node = undefined;
  const result = traverse(root, obj)
  return result.node;
};

var traverse = function(root, obj){
  if (root.left) traverse(root.left, obj)
  
  obj.k--;
  if (obj.k === 0) obj.node = root.val;
  
  if (root.right) traverse(root.right, obj)
  
  return obj;
}
