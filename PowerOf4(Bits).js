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
// O(n) T | O(n) S
var isPowerOfFour = function(n) {
  if (n === 1) return true;
  if (n < 1) return false;
  
  return isPowerOfFour(n / 4)
};
