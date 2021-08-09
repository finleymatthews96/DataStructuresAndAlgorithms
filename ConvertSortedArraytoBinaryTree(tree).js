/*
LeetCode Easy

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
*/

var sortedArrayToBST = function(nums, leftIdx = 0, rightIdx = nums.length - 1) {
  if (leftIdx > rightIdx) return null;
  
  let midpoint = Math.floor((rightIdx + leftIdx)/2)
  let node = new TreeNode(nums[midpoint])
  
  node.left = sortedArrayToBST(nums, leftIdx, midpoint - 1);
  node.right = sortedArrayToBST(nums, midpoint + 1, rightIdx);
  
  return node;
};
