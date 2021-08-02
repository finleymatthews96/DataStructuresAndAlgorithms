/**
112. Path Sum

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// O(n) T || O(h) S where n is the number of nodes, and h is the depth of the tree
var hasPathSum = function(root, targetSum) {
    
    if (!root) return false;
    
    if (!root.left && !root.right) {
        return targetSum - root.val === 0
    }
    
    let left = false;
    let right = false;
    if (root.left) left = hasPathSum(root.left, targetSum - root.val);
    if (root.right) right = hasPathSum(root.right, targetSum - root.val);

    return left || right;
};
