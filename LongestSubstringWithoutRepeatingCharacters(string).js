/*

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
