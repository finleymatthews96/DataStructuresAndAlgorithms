/* Odd Even Linked List
LeetCode Medium

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
*/

var oddEvenList = function(head) {
  if (!head) return null;
  let firstEven = head.next
  let lastOdd = head;
  let currentNode = head;
  let isOdd = true;
  
  while (currentNode){
    if (isOdd) lastOdd = currentNode;
    const temp = currentNode.next;
    if (temp && temp.next){
      currentNode.next = temp.next
    } else {
      currentNode.next = null;
    }
    currentNode = temp;
    isOdd = !isOdd
  }
  
  lastOdd.next = firstEven;
  return head
};
