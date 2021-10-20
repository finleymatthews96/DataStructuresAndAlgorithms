/* Search a 2D Matrix
LeetCode Medium
Amazon, Bloomberg, Nutanix

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 
Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

// O(log m + log n) T | O(1) S
var searchMatrix = function(matrix, target) {
  if(!matrix.length) return false;
    
  let start = 0;
  let end = matrix.length - 1;
  let midRow;
    
  while (start <= end) {
    midRow = Math.floor((start + end)/2);
    if (matrix[midRow][0] === target) return true;
    else if (target < matrix[midRow][0]) end = midRow-1;
    else start = midRow+1;
  }
    
  if (matrix[midRow][0] > target) midRow--;
  if (midRow < 0) return false;
    
  start = 0;
  end = matrix[midRow].length - 1;
    
  while(start <= end) {
    const midCol = Math.floor((start + end)/2);
    if(matrix[midRow][midCol] === target) return true;
    else if (target < matrix[midRow][midCol]) end = midCol-1;
    else start = midCol+1;
  }
  
  return false;
};

