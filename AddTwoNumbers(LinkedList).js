/* Add Two Numbers
LeetCode Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in 
reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1: 

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

// O(n) T | O(n) S where n is length of longer LL
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode();
  let current = head;
  let carryOver = 0;
  
  while (l1 || l2){
    let sum;
    if (l1 && l2) sum = l1.val + l2.val + carryOver;
    else if (l1) sum = l1.val + carryOver;
    else sum = l2.val + carryOver;
    
    let node;
    if (sum > 9){
      node = new ListNode(sum - 10);
      carryOver = 1;
    } else {
      node = new ListNode(sum);
      carryOver = 0;
    }
    
    current.next = node;
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  
  if (carryOver){
    let node = new ListNode(1);
    current.next = node;
  }
  
  return head.next;
};
