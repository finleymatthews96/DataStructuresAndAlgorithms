/* Unique Paths
LeetCode medium

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 7
Output: 28
*/

// O(m x n) T || O(m x n) S
var uniquePaths = function(m, n) {
  const matrix = Array(m).fill(Array(n).fill(1));
  for (let i = m - 2; i >= 0; i--){
    for (let j = n - 2; j >= 0; j--){
      matrix[i][j] = matrix[i+1][j] + matrix[i][j+1]
    }
  }
  return matrix[0][0];
};
