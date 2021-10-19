/* Copy List with Random Pointer
LeetCode Medium
Facebook, Amazon, many more

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

Example 2:

Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]

Example 3:

Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]

Example 4:

Input: head = []
Output: []
Explanation: The given linked list is empty (null pointer), so return null.

*/

/*
It would be relatively trivial to find a linear solution using a memo, where you create each new node as you come across it
for the first time (either as a pervious node's next or random pointer), and each successive time you come across it (at a 
different next or random pointer) you just change the pointer to direct itself to the memoized node. 

Below is the O(N) T, O(1) S version
*/
var copyRandomList = function(head) {
  let interweaved = addNodes(head)
  let changeRandomPointers = alterRandom(interweaved);
  return separateLists(head);
};

var addNodes = function(list){
  let curr = list;
  let next;
  
  while (curr){
    next = new Node(curr.val, curr.next, curr.random);
    curr.next = next;
    curr = next.next;
  }
  
  return list;
}

var alterRandom = function(list){
  let current = list;
  
  while (current){
    current = current.next;
    
    if (current !== null && current.random !== null){
      current.random = current.random.next;
    }
    
    if (current !== null) current = current.next;
  }
  
  return list;
}

var separateLists = function(list){
  if (!list) return null;
  let head1 = list;
  let head2 = list.next;
  
  let P1 = head1;
  let P2 = head2;
  let P3;
  
  while (P2){
    P3 = P2.next;
    P1.next = P3;
    P1 = P2;
    P2 = P2.next;
  }
  
  return head2;
}
