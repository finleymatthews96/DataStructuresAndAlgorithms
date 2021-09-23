/* Find Successor Node
Cracking the Coding Interview

write an algo to find the "next node"
(in order successor)
of given node in BST
assume each has a link to its parent

node in question

Node:
parent, left, right, val
*/

// O(h) T where h is height of tree | O(1) S
function findSuccessorNode(node){
  if (node.right) return findMinimumNode(node.right)
  return findAncestor(node)
}

function findMinimumNode(node){
  while (node.left){
    node = node.left;
  }
  return node.val
}

function findAncestor(node){
  while (node.parent){
    if (node.parent.left === node) return node.parent.val
    node = node.parent;
   }
}
