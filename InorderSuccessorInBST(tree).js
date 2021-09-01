/* Inorder Successor in BST
LeetCode Medium

Given the root of a binary search tree and a node p in it, return the in-order successor of that node in the BST. If the given node has no in-order successor in the tree, return null.

The successor of a node p is the node with the smallest key greater than p.val.

Example 1:

Input: root = [2,1,3], p = 1
Output: 2
Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6
Output: null
Explanation: There is no in-order successor of the current node, so the answer is null.

*/

// O(logn) T | O(1) S where n is number of nodes
var inorderSuccessor = function(root, p) {
  if (p.right) return findMin(p.right);
  return findFirstRightAncestor(root, p);
};

function findFirstRightAncestor(root, p){
  let firstRightParent = null;
  let currentNode = root;
  
  while (currentNode){
    if (p.val === currentNode.val) break;
    if (p.val > currentNode.val){
      currentNode = currentNode.right
    } else {
      firstRightParent = currentNode;
      currentNode = currentNode.left;
    }
  }
  
  return firstRightParent;
}

function findMin(node){
  while (node.left){
    node = node.left;
  }
  return node;
}
