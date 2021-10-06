/* Valid Palindrome II
LeetCode Easy
Facebook

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:

Input: s = "aba"
Output: true

Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false

*/

// O(n) T | O(1) S
var validPalindrome = function(s, corrections = 1) {
  let lo = 0;
  let hi = s.length - 1;
  
  while (lo < hi) {
    if (s[lo] === s[hi]) {
      lo++;
      hi--;
      continue;
    }
    
    if (corrections === 0) {
      return false;
    }
    
    return validPalindrome(s.slice(lo, hi), 0) 
      || validPalindrome(s.slice(lo + 1, hi + 1), 0);
  }
  
  return true;
};
