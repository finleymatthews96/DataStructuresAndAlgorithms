/* Power of Four
LeetCode Easy

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
*/

// recursive
// O(log n) T | O(log n) S
var isPowerOfFour = function(n) {
  if (n === 1) return true;
  if (n < 1) return false;
  
  return isPowerOfFour(n / 4)
};

// iterative
// O(log n) T | O(1) S
var isPowerOfFour = function(n) {
  while (n > 1){
    n /= 4;
  }
  
  return n === 1
};
