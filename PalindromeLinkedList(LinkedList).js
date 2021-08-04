/* Palindrome Linked list
LeetCode Easy

Given the head of a singly linked list, return true if it is a palindrome.
Input: head = [1,2,2,1]
Output: true

Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

// O(n) T || O(1) S
let isPalindrome = function(list) {
  let [prev, tortoise] = findMidpoint(list); 
  if (prev) prev.next = null
  const list2 = reverseLinkedList(tortoise);
  return areTheySame(list, list2);
};

let findMidpoint = function (list){
  let prev = null
  let tortoise = list
  let hare = list.next;

  while (hare != null){
    if (prev === null){
      prev = list
    } else {
      prev = tortoise;
    }
    tortoise = tortoise.next;
    hare = hare.next
    if (hare) hare = hare.next;
  }
  
  return [prev, tortoise];
}

let reverseLinkedList = function(list){
  let prev = null;
  let curr = list;
  
  while (curr != null){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

let areTheySame = function(list1, list2){
  while (list1 && list2){
    if (list1.val !== list2.val) return false;
    list1 = list1.next;
    list2 = list2.next;
  }

  if (list2 != null && list2.next != null) return false;

  return true;
}
