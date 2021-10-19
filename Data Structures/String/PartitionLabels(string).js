/* Partition Labels
LeetCode Medium
Facebook, Amazon, Nutanix

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.

Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:

Input: s = "eccbbbbdec"
Output: [10]

*/

// O(n^2) T | O(1) S
var partitionLabels = function(s) {
  let result = [];
  let i=0;
  
  while (i < s.length){
    let nextPartition = findNextPartition(i);
    result.push(nextPartition - i);
    i = nextPartition;
  }
  
  function findNextPartition(idx){
    let end = idx + 1;
    let last = idx + 1;
    
    for (let x=idx; x<end; x++){
      for (let y=end; y<s.length; y++){
        if (s[y] === s[x]){
          end = y;
          last = Math.max(last, y + 1);
        }
      }
    }
    
    return last;
  }
  
  return result;
};
