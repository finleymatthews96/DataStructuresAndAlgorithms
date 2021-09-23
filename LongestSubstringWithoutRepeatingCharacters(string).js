/* Longest Substring Without Repeating Characters
LeetCode Medium
Amazon, Microsoft, Bloomberg, FB, Adobe, many more

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

*/

// O(n^2) T | O(1) S - brute force
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  
  for (let i=0; i<s.length; i++){
    let memo = {};
    current = 0;
    for (let j=i; j<s.length; j++){
      if (memo[s[j]]) break;
      current++;
      memo[s[j]] = true;
    }
    longest = Math.max(longest, current);
  }
  
  return longest;
};
