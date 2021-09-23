/* Longest Palindromic Substring
LeetCode Medium

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

*/

// O(n^2) T || O(1) S where n is length of string
var longestPalindrome = function(s) {
  if (s == null || s.length === 0) return '';
  let longest = '';

  for (let i=0; i < s.length; i++){
    const pal1 = expandAroundCenter(s, i, i);
    const pal2 = expandAroundCenter(s, i, i+1);
    const longerPalindrome = pal1.length > pal2.length ? pal1 : pal2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    } 
  }
  
  return longest;
};

var expandAroundCenter = function(s, left, right){
  while (left >= 0 && right < s.length && s[left] === s[right]){
    left--;
    right++
  }
  return s.slice(left + 1, right);
}
