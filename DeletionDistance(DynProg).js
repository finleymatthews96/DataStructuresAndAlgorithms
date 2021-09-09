/* Deletion Distance
LeetCode Medium

Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

 

Example 1:

Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Example 2:

Input: word1 = "leetcode", word2 = "etco"
Output: 4

*/

// O(m * n) T | O(m * n) S dynamic programming solution
var minDistance = function(word1, word2) {
  let matrix = Array(word1.length + 1).fill(0).map(element => Array(word2.length + 1).fill(0))
  
  for (let i=0; i<=word1.length; i++){
    for (let j=0; j<=word2.length; j++){
      if (i === 0){
        matrix[i][j] = j
      } else if (j === 0){
        matrix[i][j] = i
      } else {
        let added = 0;
        if (word1[i-1] !== word2[j-1]) added = 2;
        matrix[i][j] = Math.min(matrix[i-1][j-1] + added, matrix[i-1][j] + 1, matrix[i][j-1] + 1);
      }
    }
  }
  
  return matrix[matrix.length - 1][matrix[0].length - 1];
};
