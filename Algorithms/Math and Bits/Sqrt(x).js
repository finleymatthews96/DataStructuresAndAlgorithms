/* Sqrt(x)
LeetCode Easy
Microsoft, LinkedIn, Amazon, Google

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:

Input: x = 4
Output: 2

Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/

// O( x^1/2 ) T | O(1) S
var mySqrt = function(x) {
  let i = 0;
  
  while (i <= x){
    if (i * i === x) return i;
    if (i * i > x) return i - 1;
    i++
  }
};

// O(log x) T | O(1) S
var mySqrt = function(x) {
  let low = 0;
  let high = x;
  
  while (low <= high){
    const mid = Math.floor((low + high) / 2);
    
    if (mid * mid === x){
      return mid;
    } else if (mid * mid > x){
      high = mid;
    } else if (mid * mid < x){
      if ((mid + 1) * (mid + 1) > x) return mid;
      low = mid + 1;
    }
  }
};
