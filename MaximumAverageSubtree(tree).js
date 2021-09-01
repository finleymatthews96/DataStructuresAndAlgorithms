/* Maximum Average Subtree
LeetCode Medium
Amazon

Given the root of a binary tree, return the maximum average value of a subtree of that tree. Answers within 10-5 of the actual answer will be accepted.

A subtree of a tree is any node of that tree plus all its descendants.

The average value of a tree is the sum of its values, divided by the number of nodes.

Example 1:


Input: root = [5,6,1]
Output: 6.00000
Explanation: 
For the node with value = 5 we have an average of (5 + 6 + 1) / 3 = 4.
For the node with value = 6 we have an average of 6 / 1 = 6.
For the node with value = 1 we have an average of 1 / 1 = 1.
So the answer is 6 which is the maximum.

Example 2:

Input: root = [0,null,1]
Output: 1.00000
*/

// O(n) T | O(n) S, post order traversal
var maximumAverageSubtree = function(root) {
  return greatestAverage(root)[2]
};

var greatestAverage = function(root){
  let leftAvg = 0, leftCount = 0, leftGreatest;
  if (root.left) [leftAvg, leftCount, leftGreatest] = greatestAverage(root.left);
  
  let rightAvg = 0, rightCount = 0, rightGreatest;
  if (root.right) [rightAvg, rightCount, rightGreatest] = greatestAverage(root.right);
  
  let count = leftCount + rightCount + 1
  let currentAvg = ((leftAvg * leftCount) + (rightAvg * rightCount) + root.val)/count
  
  let greatest;
  if (leftGreatest && rightGreatest){
    greatest = Math.max(currentAvg, leftGreatest, rightGreatest)
  } else if (leftGreatest){
    greatest = Math.max(currentAvg, leftGreatest)
  } else if (rightGreatest){
    greatest = Math.max(currentAvg, rightGreatest)
  } else {
    greatest = currentAvg
  }

  return [currentAvg, count, greatest]
}
