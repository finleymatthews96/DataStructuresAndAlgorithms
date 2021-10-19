/* Merge k Sorted Lists
LeetCode Hard
Amazon, Facebook, many others

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []

*/

// O(k * N) T | O(k * N) S
var mergeKLists = function(lists) {
  let result = new ListNode();
  let current = result
  let allDone = false;
  
  while (!allDone) {
    let min = new ListNode(Infinity)
    let minIndex = -1
    allDone = true;
    
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] && lists[i].val < min.val) {
        min.val = lists[i].val;
        minIndex = i;
        if (lists[i] !== null) {
          allDone = false;
        }
      }
    }
    
    if (minIndex > -1) {
      current.next = new ListNode(lists[minIndex].val);
      current = current.next;
      lists[minIndex] = lists[minIndex].next;
    }
  }
  
  return result.next;
};
