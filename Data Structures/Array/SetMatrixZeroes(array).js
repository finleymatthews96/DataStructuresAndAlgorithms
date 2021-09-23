/* Set Matrix Zeroes
LeetCode Medium
Microsoft, Amazon, Facebook

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

*/

// O(m*n) T | O(m+n) S
var setZeroes = function(matrix) {
  const row = {};
  const col = {};
  
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[0].length; j++){
      if (matrix[i][j] === 0){
        row[i] = true;
        col[j] = true;
      }
    }
  }
  
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[0].length; j++){
      if (row[i] || col[j]) matrix[i][j] = 0;
    }
  }
};
