/* Populating Next Right Pointers in Each Node
LeetCode Medium
Amazon, Facebook, Microsoft

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. 
The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example 1:


Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next 
right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
Example 2:

Input: root = []
Output: []
*/

// O(n) T | O(2^h) S where n is number of nodes, h is height of tree
var connect = function(root) {
  if (!root) return null;
  let previousRow = [root]
  let currentRow = [];
  
  while (previousRow[0].left){
    for (let i=0; i<previousRow.length; i++){
      currentRow.push(previousRow[i].left)
      previousRow[i].left.next = previousRow[i].right
      currentRow.push(previousRow[i].right)
      previousRow[i].right.next = previousRow[i+1]?.left || null;
    }
    previousRow = currentRow;
    currentRow = []
  }
  
  previousRow[previousRow.length - 1].next = null;
  return root;
};
