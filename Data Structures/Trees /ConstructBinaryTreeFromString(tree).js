/* Construct Binary Tree from String
LeetCode Medium
Facebook, Oracle, Lark Health (allegedly)

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. 
The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the left child node of the parent first if it exists.

 

Example 1:


Input: s = "4(2(3)(1))(6(5))"
Output: [4,2,6,3,1,5]

Example 2:

Input: s = "4(2(3)(1))(6(5)(7))"
Output: [4,2,6,3,1,5,7]

Example 3:

Input: s = "-4(2(3)(1))(6(5)(7))"
Output: [-4,2,6,3,1,5,7]

*/

// recursive solution, O(n) T where n is num chars in string, O(d) S, where d is depth of tree, that will be max call stack size
var str2tree = function(s) {
  return str2treeInternal(0)[0];
  
  function getNumber(start){
    let numString = ''
    
    while (start < s.length && s[start] !== '(' && s[start] !== ')'){
      numString += s[start];
      start++;
    }
    
    return [Number(numString), start];
  }
  
  function str2treeInternal(curr){
    if (curr === s.length) return [null, curr];
    
    let [val, nextIdx] = getNumber(curr);
    let node = new TreeNode(val);
    
    if (nextIdx < s.length && s[nextIdx] === '('){
      [leftNode, nextIdx] = str2treeInternal(nextIdx + 1);
      node.left = leftNode;
    }
    
    if (node.left && nextIdx < s.length && s[nextIdx] === '('){
      [rightNode, nextIdx] = str2treeInternal(nextIdx + 1);
      node.right = rightNode;
    }
    
    if (nextIdx < s.length && s[nextIdx] === ')'){
      return [node, nextIdx + 1]
    }
    
    return [node, nextIdx]
  }
}
