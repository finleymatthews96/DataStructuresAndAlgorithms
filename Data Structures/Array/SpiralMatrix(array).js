/* Spiral Matrix
LeetCode Medium
Microsoft, Apple, Amazon, many more

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

// O(m x n) T | O(m x n) S -> using "seen" matrix
var spiralOrder = function(matrix) {
  const seen = Array(matrix.length).fill(0).map((zero => Array(matrix[0].length).fill(0)));
  let result = [];
  
  let i = 0;
  let j = 0;
  
  while (seen[i][j] === 0){
    for (j; j < matrix[0].length; j++){
      if (seen[i][j] === 1) break;
      process(matrix, result, seen, i, j)
    }
    
    j -= 1;
    i += 1;
    
    for (i; i < matrix.length; i++){
      if (seen[i][j] === 1) break;
      process(matrix, result, seen, i, j)
    }
    
    i -= 1;
    j -= 1;
    
    for (j; j >= 0; j--){
      if (seen[i][j] === 1) break;
      process(matrix, result, seen, i, j)
    }
    
    j += 1;
    i -= 1;
    
    for (i; i >= 0; i--){
      if (seen[i][j] === 1) break;
      process(matrix, result, seen, i, j)
    }
    
    i += 1;
    j += 1;
  }
  
  return result;
};

function process(matrix, result, seen, i, j){
  result.push(matrix[i][j]);
  seen[i][j] = 1;
}
