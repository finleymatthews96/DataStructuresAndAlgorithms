/* Reverse Linked List

Leetcode Easy

Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
/**
 * @param {ListNode} head
 * @return {ListNode}
*/

// Iterative Approach:
// O(n) T || O(1) S where n is length of linked list
var iterativeReverseList = function(head) {
  let prev = null;
  let curr = head;
    
  while (curr) {
    const nextTemp = curr.next
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  
  return prev
};

// Recursive Approach
// O(n) T || O(n) S where n is the length of the linked list
var recursiveReverseList = function(head) {
  if (head == null || head.next == null) return head;
  const reversed = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
};
